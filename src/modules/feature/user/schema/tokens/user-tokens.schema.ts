import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Tokens
import { UserJwtSchema, UserJwtToken } from './user-jwt-token.schema'
import { UserRecoverySchema, UserRecoveryToken } from './user-recovery-token.schema'
import { UserVerificationSchema, UserVerificationToken } from './user-verification-token.schema'

@Schema()
export class UserTokens {
    @Prop({ _id: false, type: UserJwtSchema })
    jwt: UserJwtToken

    @Prop({ _id: false, type: UserRecoverySchema })
    recovery: UserRecoveryToken

    @Prop({ _id: false, type: UserVerificationSchema })
    verification: UserVerificationToken
}

export const UserTokensSchema = SchemaFactory.createForClass(UserTokens)
