import { Body, Controller, Post } from '@nestjs/common'

// Service
import { AuthenticationService } from './authentication.service'

// Types
import { Api } from '@/types/api'

@Controller('authentication')
export class AuthenticationController {
    constructor(private _authenticationService: AuthenticationService) {}

    @Post('signup')
    async create(@Body() dto: Api.SignupUserParams): Promise<Api.Response<Api.Tokens>> {
        const data = await this._authenticationService.signup(dto)

        return {
            data,
            success: true,
        }
    }
}
