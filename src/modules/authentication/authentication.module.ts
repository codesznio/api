import { Module } from '@nestjs/common'

// Module
import { ProfileModule } from '@/modules/profile/profile.module'
import { UserModule } from '@/modules/user/user.module'

// Controller
import { AuthenticationController } from './authentication.controller'

// Service
import { AuthenticationService } from './authentication.service'

@Module({
    imports: [ProfileModule, UserModule],
    controllers: [AuthenticationController],
    providers: [AuthenticationService],
    exports: [AuthenticationService],
})
export class AuthenticationModule {}
