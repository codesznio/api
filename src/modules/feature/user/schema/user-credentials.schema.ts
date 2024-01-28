import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema()
export class UserCredentials {
    @Prop({ isRequired: true, unique: true, trim: true, lowercase: true })
    email: string

    @Prop({ isRequired: true })
    password: string

    @Prop({ type: Boolean, default: false })
    verified: boolean
}

export const UserCredentialsSchema = SchemaFactory.createForClass(UserCredentials)
