import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Modules
import { User } from '@/modules/user/schema/user.schema'

export type ProfileDocument = Profile & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Profile {
    _id: string

    @Prop({
        type: Types.ObjectId,
        ref: User.name,
    })
    user: Types.ObjectId
}

export const ProfileSchema = SchemaFactory.createForClass(Profile)
