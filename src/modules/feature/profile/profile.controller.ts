import { Controller, Get } from '@nestjs/common'

@Controller('profiles')
export class ProfileController {
    @Get('')
    async test() {
        return {
            data: 'profile endpoint',
            success: true,
        }
    }
}
