import { registerAs } from '@nestjs/config'

export const jwtConfig = registerAs('jwt', () => ({
    access: process.env.JWT_ACCESS,
    refresh: process.env.JWT_REFRESH,
    issuer: process.env.JWT_ISSUER,
}))
