import { JwtModule as NestJwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'

// Modules
import { ConfigModule } from '@/config'
import { UserModule } from '@/modules/feature/user/user.module'
import { ProfileModule } from '@/modules/feature/profile/profile.module'

// Services
import { JwtService } from './jwt.service'

// Strategies
import { AccessStrategy } from './strategies/access.strategy'
import { RefreshStrategy } from './strategies/refresh.strategy'

@Module({
    imports: [NestJwtModule.register({}), ConfigModule, ProfileModule, UserModule],
    providers: [JwtService, AccessStrategy, RefreshStrategy],
    exports: [JwtService, AccessStrategy, RefreshStrategy],
})
export class JwtModule {}
