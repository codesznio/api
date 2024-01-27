import { Controller, Get } from '@nestjs/common'

@Controller('authentication')
export class AuthenticationController {
    @Get('')
    async test() {
        return {
            data: 'auth endpoint',
            success: true,
        }
    }
}
