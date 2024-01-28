import { BadRequestException, Injectable } from '@nestjs/common'

import { Api } from '@/data/types/api'

// Services
import { JwtService } from '@/modules/utility/jwt/jwt.service'
import { ProfileService } from '@/modules/feature/profile/profile.service'
import { UserService } from '@/modules/feature/user/user.service'

@Injectable()
export class AuthenticationService {
    constructor(
        private _jwtService: JwtService,
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

        /**
         * TODO: Update DB with refresh token, mailer, activity log
         */
        await Promise.all([])

        return tokens
    }
}
