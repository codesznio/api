import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type ActivityDocument = Activity & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Activity {
    _id: string
}

export const ActivitySchema = SchemaFactory.createForClass(Activity)
