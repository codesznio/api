import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class UserJwtToken {
    @Prop()
    refresh: string
}

export const UserJwtSchema = SchemaFactory.createForClass(UserJwtToken)
