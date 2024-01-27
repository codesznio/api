import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'

// Configs
import { appConfig } from './_app.config'
import { jwtConfig } from './_jwt.config'
import { providersConfig } from './_providers.config'
import { sendgridConfig } from './_sendgrid.config'
import { stripeConfig } from './_stripe.config'

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            load: [appConfig, jwtConfig, providersConfig, sendgridConfig, stripeConfig],
        }),
    ],
})
export class ConfigModule {}
