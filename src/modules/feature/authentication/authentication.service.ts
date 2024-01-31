import { BadRequestException, Injectable } from '@nestjs/common'

// Data
import { Api } from '@/data/types/api'

// Services
import { JwtService } from '@/modules/utility/jwt/jwt.service'
import { MailerService } from '@/modules/utility/mailer/mailer.service'
import { ProfileService } from '@/modules/feature/profile/profile.service'
import { StripeService } from '@/modules/utility/stripe/services'
import { UserService } from '@/modules/feature/user/user.service'

// Utils
import { StringEncryptor } from '@/shared/utils/string-encryptor'

@Injectable()
export class AuthenticationService {
    constructor(
        private _jwtService: JwtService,
        private _mailerService: MailerService,
        private _profileService: ProfileService,
        private _stripeService: StripeService,
        private _userService: UserService,

        private _stringEncryptor: StringEncryptor,
    ) {}

    async login(dto: Api.EmailLoginParams): Promise<Api.Tokens> {
        const user = await this._userService.retrieve.byEmail(dto.email)

        if (!user) {
            throw new BadRequestException('Cannot verify account')
        }

        const profile = await this._profileService.retrieve.byUser(user._id)
        const tokens = await this._jwtService.buildTokens(user, profile)

        await Promise.all([
            this._userService.update.properties(user, {
                'tokens.jwt.refresh': this._stringEncryptor.generate(tokens.refresh),
            }),
        ])

        return tokens
    }

    async logout(payload: Api.JwtPayload): Promise<void> {
        const user = await this._userService.retrieve.byId(payload.user)

        if (!user) {
            throw new BadRequestException('Invalid token.')
        }

        await Promise.all([
            this._userService.update.properties(user, {
                'tokens.jwt.refresh': null,
            }),
        ])

        return
    }

    async refresh(payload: Api.JwtRefreshPayload): Promise<Api.Tokens> {
        const [user, profile] = await Promise.all([
            this._userService.retrieve.byId(payload.user),
            this._profileService.retrieve.byId(payload.profile),
        ])
        if (!user) {
            throw new BadRequestException('Invalid token.')
        }

        const isValid = this._stringEncryptor.compare(payload.refresh, user.tokens.jwt.refresh)

        if (!isValid) {
            throw new BadRequestException('Invalid token.')
        }

        const tokens = await this._jwtService.buildTokens(user, profile)

        await Promise.all([
            this._userService.update.properties(user, {
                'tokens.jwt.refresh': this._stringEncryptor.generate(tokens.refresh),
            }),
        ])

        return tokens
    }

    async signup(dto: Api.EmailSignupParams): Promise<Api.Tokens> {
        const exists = await this._userService.retrieve.byEmail(dto.email)

        if (exists) {
            throw new BadRequestException('Cannot create user with this email.')
        }

        const user = await this._userService.create(dto)

        if (!user) {
            throw new BadRequestException('Cannot create user with this email.')
        }

        const [profile, stripe] = await Promise.all([
            this._profileService.create(user),
            this._stripeService.Customer.create({ email: dto.email }),
        ])

        if (!profile) {
            throw new BadRequestException('Cannot create user with this email.')
        }

        const tokens = await this._jwtService.buildTokens(user, profile)

        await Promise.all([
            this._userService.update.properties(user, {
                'payments.stripeid': stripe.id,
                'tokens.jwt.refresh': this._stringEncryptor.generate(tokens.refresh),
            }),
            this._mailerService.sendWelcomeEmail(user),
        ])

        return tokens
    }

    // TODO
    async resendEmailVerification(): Promise<void> {
        // await this._mailerService.sendPasswordResetEmail({})

        return
    }

    async verifyEmail(dto: Api.EmailVerificationParams): Promise<Api.Tokens> {
        const user = await this._userService.retrieve.byId(dto.id)

        if (!user) {
            throw new BadRequestException('Cannot verify account')
        }

        if (
            dto.token !== user.tokens.verification.token &&
            parseInt(dto.numeric) !== user.tokens.verification.numeric
        ) {
            throw new BadRequestException('Cannot verify account')
        }

        const profile = await this._profileService.retrieve.byUser(user._id)
        const tokens = await this._jwtService.buildTokens(user, profile)

        await Promise.all([
            this._userService.update.properties(user, {
                'credentials.verified': true,
                'tokens.jwt.refresh': this._stringEncryptor.generate(tokens.refresh),
                'tokens.verification.expiry': null,
                'tokens.verification.numeric': null,
                'tokens.verification.token': null,
            }),
        ])

        return tokens
    }
}
