import { Injectable } from '@nestjs/common'

import { Api } from '@/types/api'

/**
 * 1. Check if user exists
 */
@Injectable()
export class AuthenticationService {
    signup(dto: Api.SignupUserParams): Api.Tokens {
        console.log(dto)

        return {
            access: '',
            refresh: '',
        }
    }
}

// async signup(dto: SignupDTO): Promise<TokensResponseType> {
//     const exists = await this._userService.find({ 'credentials.email': dto.email })

//     if (exists) {
//         throw new BadRequestException('Cannot create user with this email.')
//     }

//     const user = await this._userService.create(dto)
//     const tokens = await this._jwt.buildTokens(user)

//     await Promise.all([
//         this._userService.update(user._id, {
//             'tokens.refresh': this._stringEncryptor.generateHash(tokens.refresh),
//         }),
//     ])

//     return tokens
// }
