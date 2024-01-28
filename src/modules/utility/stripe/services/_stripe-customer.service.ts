import { Injectable } from '@nestjs/common'
import Stripe from 'stripe'

// Service
import { StripeSharedService } from './_stripe-shared.service'

@Injectable()
export class StripeCustomerService extends StripeSharedService {
    create(dto: Stripe.CustomerCreateParams): Promise<Stripe.Response<Stripe.Customer>> {
        return this._stripe.customers.create(dto)
    }

    delete(id: string, params?: Stripe.CustomerDeleteParams): Promise<Stripe.Response<Stripe.DeletedCustomer>> {
        return this._stripe.customers.del(id, params)
    }

    getAll(): Stripe.ApiListPromise<Stripe.Customer> {
        return this._stripe.customers.list()
    }

    getById(
        id: string,
        params?: Stripe.CustomerRetrieveParams,
    ): Promise<Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>> {
        return this._stripe.customers.retrieve(id, params)
    }

    search(params: Stripe.CustomerSearchParams): Stripe.ApiSearchResultPromise<Stripe.Customer> {
        return this._stripe.customers.search(params)
    }

    update(id: string, dto: Stripe.CustomerUpdateParams): Promise<Stripe.Response<Stripe.Customer>> {
        return this._stripe.customers.update(id, dto)
    }
}
