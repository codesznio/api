import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Activity
import { Activity, ActivitySchema } from './activity.schema'

@Module({
    imports: [MongooseModule.forFeature([{ name: Activity.name, schema: ActivitySchema }])],
    controllers: [],
    providers: [],
    exports: [],
})
export class ActivityModule {}
