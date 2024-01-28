import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema()
export class UserCredentials {
    @Prop({ isRequired: true, unique: true, trim: true, lowercase: true })
    email: string

    @Prop({ type: Boolean, default: false })
    email_verified: boolean

    @Prop({ isRequired: true })
    password: string
}

export const UserCredentialsSchema = SchemaFactory.createForClass(UserCredentials)
