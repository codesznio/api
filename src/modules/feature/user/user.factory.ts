import { Injectable } from '@nestjs/common'
import * as dateFns from 'date-fns'

// Data
import { User } from './schema/user.schema'

// Types
import { Api } from '@/data/types/api'

// Utils
import { StringEncryptor } from '@/shared/string-encryptor'

@Injectable()
export class UserFactory {
    constructor(private readonly _stringEncryptor: StringEncryptor) {}

    create(dto: Api.UserCreateParams): User {
        const user = new User()

        user.credentials = {
            email: dto.email,
            password: this._stringEncryptor.generate(dto.password),
            verified: false,
        }

        user.tokens = {
            jwt: {
                refresh: null,
            },
            recovery: {
                token: null,
                expiry: null,
            },
            verification: {
                numeric: this._stringEncryptor.generateRandomSixDigitCode(),
                token: this._stringEncryptor.generateRandomString(20),
                expiry: dateFns.addHours(new Date(), 6).getTime(),
            },
        }

        return user
    }
}
