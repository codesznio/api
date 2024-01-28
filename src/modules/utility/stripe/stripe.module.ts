import { Module } from '@nestjs/common'

// Service
import { StripeService } from './services'

@Module({
    imports: [],
    providers: [StripeService],
    exports: [StripeService],
})
export class StripeModule {}
