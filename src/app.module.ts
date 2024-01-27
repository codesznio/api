import { Module } from '@nestjs/common'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers'

// Modules
import { ActivityModule } from '@/modules/activity/activity.module'
import { AuthenticationModule } from '@/modules/authentication/authentication.module'
import { PermissionModule } from '@/modules/permission/permission.module'
import { ProfileModule } from '@/modules/profile/profile.module'
import { UserModule } from '@/modules/user/user.module'

// Util Modules
import { JwtModule } from '@/utils/jwt/jwt.module'
import { MailerModule } from '@/utils/mailer/mailer.module'

@Module({
    imports: [
        // Global Modules
        ConfigModule,
        ProvidersModule,

        // Modules
        ActivityModule,
        AuthenticationModule,
        PermissionModule,
        ProfileModule,
        UserModule,

        // Mailer
        JwtModule,
        MailerModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
