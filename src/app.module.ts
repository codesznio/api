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

// Util Modules
import { MailerModule } from '@/utils/mailer/mailer.module'

@Module({
    imports: [
        // Global Modules
        ConfigModule,
        ProvidersModule,

        // Modules
        ActivityModule,
        AuthenticationModule,
        ProfileModule,
        UserModule,

        // Mailer
        MailerModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
