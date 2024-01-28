import { Module } from '@nestjs/common'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/data/providers'

// Modules
import { ActivityModule } from '@/modules/feature/activity/activity.module'
import { AuthenticationModule } from '@/modules/feature/authentication/authentication.module'
import { PermissionModule } from '@/modules/feature/permission/permission.module'
import { ProfileModule } from '@/modules/feature/profile/profile.module'
import { UserModule } from '@/modules/feature/user/user.module'

// Util Modules
import { JwtModule } from '@/modules/utility/jwt/jwt.module'
import { MailerModule } from '@/modules/utility/mailer/mailer.module'
import { StripeModule } from '@/modules/utility/stripe/stripe.module'

@Module({
    imports: [
        // Global Modules
        ConfigModule,
        ProvidersModule,

        // Feature Modules
        ActivityModule,
        AuthenticationModule,
        PermissionModule,
        ProfileModule,
        UserModule,

        // Utility Modules
        JwtModule,
        MailerModule,
        StripeModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
