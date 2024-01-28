import { Module } from '@nestjs/common'

// Module
import { JwtModule } from '@/modules/utility/jwt/jwt.module'
import { MailerModule } from '@/modules/utility/mailer/mailer.module'
import { ProfileModule } from '@/modules/feature/profile/profile.module'
import { StripeModule } from '@/modules/utility/stripe/stripe.module'
import { UserModule } from '@/modules/feature/user/user.module'

// Controller
import { AuthenticationController } from './authentication.controller'

// Service
import { AuthenticationService } from './authentication.service'

// Shared
import { StringEncryptor } from '@/shared/utils/string-encryptor'

@Module({
    imports: [JwtModule, MailerModule, ProfileModule, StripeModule, UserModule],
    controllers: [AuthenticationController],
    providers: [AuthenticationService, StringEncryptor],
    exports: [AuthenticationService],
})
export class AuthenticationModule {}
