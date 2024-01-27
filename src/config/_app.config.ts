import { registerAs } from '@nestjs/config'

export const appConfig = registerAs('app', () => ({
    env: process.env.NODE_ENV || process.env.APP_ENV,
    port: process.env.PORT || process.env.APP_PORT,
}))
