import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers
import { ProfileController } from './profile.controller'

// Services
import { ProfileService } from './profile.service'
import { Profile, ProfileSchema } from './profile.schema'

// Repository
import { ProfileRepository } from './profile.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }])],
    controllers: [ProfileController],
    providers: [ProfileRepository, ProfileService],
    exports: [ProfileService],
})
export class ProfileModule {}
