import { Module } from '@nestjs/common'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers'

// Modules
import { ProfileModule } from '@/modules/profile/profile.module'
import { UserModule } from '@/modules/user/user.module'

@Module({
    imports: [ConfigModule, ProvidersModule, ProfileModule, UserModule],
    controllers: [AppController],
})
export class AppModule {}
