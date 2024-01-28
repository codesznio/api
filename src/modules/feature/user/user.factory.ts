import { Injectable } from '@nestjs/common'
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
            email_verified: false,
            password: this._stringEncryptor.generate(dto.password),
        }

        return user
    }
}
