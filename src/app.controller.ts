import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
    @Get()
    version() {
        return {
            success: true,
            api: 0.1,
            data: {
                message: 'This API is running successfully.',
            },
        }
    }
}
