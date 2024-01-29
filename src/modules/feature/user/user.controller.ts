import { Controller, Get, UseGuards } from '@nestjs/common'

// Data
import { User } from './schema/user.schema'

// Service
import { UserService } from './user.service'

// Shareds
import { AuthorizationGuard } from '@/shared/guards/authorization.guard'
import { GetPayload } from '@/shared/decorators/get-payload.decorator'

// Types
import { Api } from '@/data/types/api'

@Controller('users')
export class UserController {
    constructor(private _profileService: UserService) {}

    @UseGuards(AuthorizationGuard)
    @Get('me')
    async me(@GetPayload() payload: Api.JwtPayload): Promise<Api.Response<User>> {
        const data = await this._profileService.retrieve.byId(payload.user)

        return {
            data,
            success: true,
        }
    }
}
