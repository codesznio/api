import { BadRequestException, Injectable } from '@nestjs/common'

import { Api } from '@/data/types/api'

// Services
import { UserService } from '@/modules/feature/user/user.service'

@Injectable()
export class AuthenticationService {
    constructor(private _userService: UserService) {}

    async signup(dto: Api.UserSignupParams): Promise<Api.Tokens> {
        const exists = await this._userService.retrieve.byEmail(dto.email)

        if (exists) {
            throw new BadRequestException('Cannot create user with this email.')
        }

        const user = await this._userService.create(dto)

        console.log(user)

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
