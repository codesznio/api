import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// User
import { User, UserDocument } from '@/modules/feature/user/schema/user.schema'

// Generic Repo
import { MongoRepository } from '@/data/mongo/mongo.repository'

@Injectable()
export class UserRepository extends MongoRepository<UserDocument> {
    constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
        super(userModel)
    }
}
