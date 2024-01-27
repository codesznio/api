import { Controller, Get } from '@nestjs/common'

@Controller('users')
export class UserController {
    @Get()
    async list() {
        return {
            data: 'This is the users endpoint',
            success: true,
        }
    }
}
