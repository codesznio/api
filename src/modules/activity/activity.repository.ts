import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Profile
import { Activity, ActivityDocument } from './activity.schema'

// Generic Repo
import { MongoRepository } from '@/shared/mongo/mongo.repository'

@Injectable()
export class ActivityRepository extends MongoRepository<ActivityDocument> {
    constructor(@InjectModel(Activity.name) activityModel: Model<ActivityDocument>) {
        super(activityModel)
    }
}
