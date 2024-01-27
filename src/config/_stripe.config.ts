import { registerAs } from '@nestjs/config'

export const stripeConfig = registerAs('stripe', () => ({
    key: process.env.STRIPE_SECRET_KEY,
    root: process.env.STRIPE_ROOT,
}))
