import { Body, Controller, Post, Query } from '@nestjs/common'

// Service
import { AuthenticationService } from './authentication.service'

// Types
import { Api } from '@/data/types/api'

@Controller('authentication')
export class AuthenticationController {
    constructor(private _authenticationService: AuthenticationService) {}

    @Post('signup')
    async create(@Body() dto: Api.UserCreateParams): Promise<Api.Response<Api.Tokens>> {
        const data = await this._authenticationService.signup(dto)

        return {
            data,
            success: true,
        }
    }

    @Post('verify/numeric')
    async verifyNumeric(@Body() dto: Api.EmailVerificationParams): Promise<Api.Response<Api.Tokens>> {
        const data = await this._authenticationService.verifyEmail(dto)

        return {
            data,
            success: true,
        }
    }

    @Post('verify/link')
    async verifyLink(@Query() dto: Api.EmailVerificationParams): Promise<Api.Response<Api.Tokens>> {
        const data = await this._authenticationService.verifyEmail(dto)

        return {
            data,
            success: true,
        }
    }

    // TODO: Add guard to get email from token to resend verification
    @Post('verify/resend')
    async verifyResend(): Promise<Api.Response<null>> {
        // TODO: Resend Verification

        return {
            data: null,
            success: true,
        }
    }
}
