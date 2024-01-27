import { Module } from '@nestjs/common'

// Service
import { StripeService } from './stripe.service'

@Module({
    imports: [],
    providers: [StripeService],
    exports: [StripeService],
})
export class StripeModule {}
