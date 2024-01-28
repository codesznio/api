import { Body, Controller, Post, Query, UseGuards } from '@nestjs/common'

// Service
import { AuthenticationService } from './authentication.service'

// Types
import { Api } from '@/data/types/api'

// Shared
import { AuthorizationGuard } from '@/shared/guards/authorization.guard'
import { RefreshGuard } from '@/shared/guards/refresh.guard'
import { GetPayload } from '@/shared/decorators/get-payload.decorator'

@Controller('authentication')
export class AuthenticationController {
    constructor(private _authenticationService: AuthenticationService) {}

    @Post('login')
    async login(@Body() body: Api.EmailLoginParams): Promise<Api.Response<Api.Tokens>> {
        const data = await this._authenticationService.login(body)

        return {
            data,
            success: true,
        }
    }

    @UseGuards(AuthorizationGuard)
    @Post('logout')
    async logout(@GetPayload() payload: Api.JwtPayload): Promise<Api.Response<null>> {
        await this._authenticationService.logout(payload)

        return {
            success: true,
            data: null,
        }
    }

    @UseGuards(RefreshGuard)
    @Post('refresh')
    async refresh(@GetPayload() payload: Api.JwtRefreshPayload): Promise<Api.Response<Api.Tokens>> {
        const data = await this._authenticationService.refresh(payload)

        return {
            data,
            success: true,
        }
    }

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
