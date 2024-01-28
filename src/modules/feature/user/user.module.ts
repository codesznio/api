import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// User
import { User, UserSchema } from './schema/user.schema'
import { UserFactory } from './user.factory'
import { UserRepository } from './user.repository'

// Service
import { UserService } from './user.service'

// Controllers
import { UserController } from './user.controller'

// Utils
import { StringEncryptor } from '@/shared/string-encryptor'

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UserController],
    providers: [StringEncryptor, UserFactory, UserRepository, UserService],
    exports: [UserService],
})
export class UserModule {}
