import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Credentials
import { UserCredentials, UserCredentialsSchema } from './user-credentials.schema'

export type UserDocument = User & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class User {
    _id: string

    @Prop({ _id: false, type: UserCredentialsSchema })
    credentials: UserCredentials
}

export const UserSchema = SchemaFactory.createForClass(User)
