import { JwtModule as NestJwtModule } from '@nestjs/jwt'
import { Module } from '@nestjs/common'

// Services
import { JwtService } from './jwt.service'

@Module({
    imports: [NestJwtModule.register({})],
    providers: [JwtService],
    exports: [JwtService],
})
export class JwtModule {}
