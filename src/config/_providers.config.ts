import { registerAs } from '@nestjs/config'

export const providersConfig = registerAs('providers', () => ({
    mongo_connection: process.env.MONGO_CONNECTION,
}))
