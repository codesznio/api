import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Schema
import { Profile, ProfileSchema } from './profile.schema'

@Module({
    imports: [MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }])],
    controllers: [],
    providers: [],
    exports: [],
})
export class ProfileModule {}
