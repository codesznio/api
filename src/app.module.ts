import { Module } from '@nestjs/common'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers'

// Modules
import { ActivityModule } from '@/modules/activity/activity.module'
import { AuthenticationModule } from '@/modules/authentication/authentication.module'
import { ProfileModule } from '@/modules/profile/profile.module'
import { UserModule } from '@/modules/user/user.module'

@Module({
    imports: [ConfigModule, ProvidersModule, ActivityModule, AuthenticationModule, ProfileModule, UserModule],
    controllers: [AppController],
})
export class AppModule {}
