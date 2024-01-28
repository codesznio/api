import { Injectable } from '@nestjs/common'

// Services
import { StripeCustomerService } from './_stripe-customer.service'

@Injectable()
export class StripeService {
    Customer: StripeCustomerService

    constructor() {
        this.Customer = new StripeCustomerService()
    }
}
