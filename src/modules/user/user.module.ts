import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Schema
import { User, UserSchema } from './schema/user.schema'
import { UserRepository } from './user.repository'

// Service
import { UserService } from './user.service'

// Controllers
import { UserController } from './user.controller'

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserRepository, UserService],
    exports: [UserService],
})
export class UserModule {}
