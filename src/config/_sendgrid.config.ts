import { registerAs } from '@nestjs/config'

export const sendgridConfig = registerAs('sendgrid', () => ({
    key: process.env.SENDGRID_KEY,
}))
