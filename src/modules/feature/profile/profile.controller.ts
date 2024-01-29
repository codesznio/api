import { Controller, Get, UseGuards } from '@nestjs/common'

// Data
import { Profile } from './profile.schema'

// Profile Service
import { ProfileService } from './profile.service'

// Shareds
import { AuthorizationGuard } from '@/shared/guards/authorization.guard'
import { GetPayload } from '@/shared/decorators/get-payload.decorator'

// Types
import { Api } from '@/data/types/api'

@Controller('profile')
export class ProfileController {
    constructor(private _profileService: ProfileService) {}

    @UseGuards(AuthorizationGuard)
    @Get('me')
    async me(@GetPayload() payload: Api.JwtPayload): Promise<Api.Response<Profile>> {
        const data = await this._profileService.retrieve.byUser(payload.user)

        return {
            data,
            success: true,
        }
    }
}
