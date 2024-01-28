import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers
import { ProfileController } from './profile.controller'

// Services
import { ProfileService } from './profile.service'

// Profile
import { Profile, ProfileSchema } from './profile.schema'
import { ProfileFactory } from './profile.factory'
import { ProfileRepository } from './profile.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }])],
    controllers: [ProfileController],
    providers: [ProfileFactory, ProfileRepository, ProfileService],
    exports: [ProfileService],
})
export class ProfileModule {}
