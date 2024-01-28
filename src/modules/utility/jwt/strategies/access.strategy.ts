import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Strategy, ExtractJwt } from 'passport-jwt'

// Types
import { Api } from '@/data/types/api'

// Services
import { UserService } from '@/modules/feature/user/user.service'
import { ProfileService } from '@/modules/feature/profile/profile.service'

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        config: ConfigService,
        private _profileService: ProfileService,
        private _userService: UserService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('jwt.access'),
        })
    }

    async validate(payload: Api.JwtPayload) {
        const [user, profile] = await Promise.all([
            this._userService.retrieve.byId(payload.user),
            this._profileService.retrieve.byUser(payload.user),
        ])

        return {
            profile: profile._id,
            role: user.credentials.role,
            user: user._id,
            verified: user.credentials.verified,
        }
    }
}
