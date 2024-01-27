import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Schema
import { User, UserSchema } from './user.schema'
import { UserRepository } from './user.repository'

// Service
import { UserService } from './user.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [],
    providers: [UserRepository, UserService],
    exports: [UserService],
})
export class UserModule {}
