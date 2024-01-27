import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'

// Configs
import { appConfig } from './_app.config'
import { providersConfig } from './_providers.config'

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true,
            load: [appConfig, providersConfig],
        }),
    ],
})
export class ConfigModule {}
