import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class UserPayments {
    @Prop()
    stripeid: string
}

export const UserPaymentsSchema = SchemaFactory.createForClass(UserPayments)
