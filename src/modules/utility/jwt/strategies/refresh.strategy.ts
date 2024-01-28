import { PassportStrategy } from '@nestjs/passport'
import { ForbiddenException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Request } from 'express'
import { Strategy, ExtractJwt } from 'passport-jwt'

// Types
import { Api } from '@/data/types/api'
@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
    constructor(config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('jwt.refresh'),
            passReqToCallback: true,
        })
    }

    validate(req: Request, payload: Api.JwtPayload): Api.JwtRefreshPayload {
        const refresh = req?.get('authorization')?.replace('Bearer', '').trim()

        if (!refresh) {
            throw new ForbiddenException('Refresh token malformed')
        }

        return {
            ...payload,
            refresh,
        }
    }
}
