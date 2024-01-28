import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class UserVerificationToken {
    @Prop()
    numeric: number

    @Prop()
    token: string

    @Prop()
    expiry: number
}

export const UserVerificationSchema = SchemaFactory.createForClass(UserVerificationToken)
