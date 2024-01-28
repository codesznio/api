import { BadRequestException, Injectable } from '@nestjs/common'

// Data
import { Api } from '@/data/types/api'

// Services
import { JwtService } from '@/modules/utility/jwt/jwt.service'
import { MailerService } from '@/modules/utility/mailer/mailer.service'
import { ProfileService } from '@/modules/feature/profile/profile.service'
import { UserService } from '@/modules/feature/user/user.service'

@Injectable()
export class AuthenticationService {
    constructor(
        private _jwtService: JwtService,
        private _mailerService: MailerService,
        private _profileService: ProfileService,
        private _userService: UserService,
    ) {}

    async signup(dto: Api.EmailSignupParams): Promise<Api.Tokens> {
        const exists = await this._userService.retrieve.byEmail(dto.email)

        if (exists) {
            throw new BadRequestException('Cannot create user with this email.')
        }

        const user = await this._userService.create(dto)

        if (!user) {
            throw new BadRequestException('Cannot create user with this email.')
        }

        const profile = await this._profileService.create(user)

        if (!profile) {
            throw new BadRequestException('Cannot create user with this email.')
        }

        const tokens = await this._jwtService.buildTokens(user, profile)

        await Promise.all([
            this._userService.update.refresh(user, tokens.refresh),
            this._mailerService.sendWelcomeEmail(user),
        ])

        return tokens
    }
}
