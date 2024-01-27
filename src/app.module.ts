import { Module } from '@nestjs/common'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers'

// Modules
import { UserModule } from '@/modules/user/user.module'

@Module({
    imports: [ConfigModule, ProvidersModule, UserModule],
    controllers: [AppController],
})
export class AppModule {}
