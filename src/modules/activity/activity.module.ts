import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Activity
import { Activity, ActivitySchema } from './activity.schema'
import { ActivityRepository } from './activity.repository'

// Controller
import { ActivityController } from './activity.controller'

// Service
import { ActivityService } from './activity.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: Activity.name, schema: ActivitySchema }])],
    controllers: [ActivityController],
    providers: [ActivityRepository, ActivityService],
    exports: [ActivityService],
})
export class ActivityModule {}
