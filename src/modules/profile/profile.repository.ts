import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Profile
import { Profile, ProfileDocument } from './profile.schema'

// Generic Repo
import { MongoRepository } from '@/shared/mongo/mongo.repository'

@Injectable()
export class ProfileRepository extends MongoRepository<ProfileDocument> {
    constructor(@InjectModel(Profile.name) profileModel: Model<ProfileDocument>) {
        super(profileModel)
    }
}
