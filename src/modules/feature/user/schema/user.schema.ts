import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Credentials
import { UserCredentials, UserCredentialsSchema } from './user-credentials.schema'
import { UserTokens, UserTokensSchema } from './tokens/user-tokens.schema'

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

    @Prop({ _id: false, type: UserTokensSchema })
    tokens: UserTokens
}

export const UserSchema = SchemaFactory.createForClass(User)
