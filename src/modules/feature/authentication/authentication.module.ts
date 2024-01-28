import { Module } from '@nestjs/common'

// Module
import { JwtModule } from '@/modules/utility/jwt/jwt.module'
import { ProfileModule } from '@/modules/feature/profile/profile.module'
import { UserModule } from '@/modules/feature/user/user.module'

// Controller
import { AuthenticationController } from './authentication.controller'

// Service
import { AuthenticationService } from './authentication.service'

@Module({
    imports: [JwtModule, ProfileModule, UserModule],
    controllers: [AuthenticationController],
    providers: [AuthenticationService],
    exports: [AuthenticationService],
})
export class AuthenticationModule {}
