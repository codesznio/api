import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class UserRecoveryToken {
    @Prop()
    token: string

    @Prop()
    expiry: number
}

export const UserRecoverySchema = SchemaFactory.createForClass(UserRecoveryToken)
