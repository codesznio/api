import { Module } from '@nestjs/common'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers'

@Module({
    imports: [ConfigModule, ProvidersModule],
    controllers: [AppController],
})
export class AppModule {}
