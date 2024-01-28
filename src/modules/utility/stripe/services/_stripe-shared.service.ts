import { Injectable } from '@nestjs/common'
import Stripe from 'stripe'

@Injectable()
export class StripeSharedService {
    protected _stripe: Stripe

    constructor() {
        this._stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            apiVersion: '2023-10-16',
        })
    }
}
