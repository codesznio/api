import { Controller, Get } from '@nestjs/common'

@Controller('activities')
export class ActivityController {
    @Get('')
    async test() {
        return {
            data: 'activity endpoint',
            success: true,
        }
    }
}
