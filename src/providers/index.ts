import { Module } from '@nestjs/common'

// Providers
import { MongoDatabaseProviderModule } from './_mongo.provider'

@Module({
    imports: [MongoDatabaseProviderModule],
})
export class ProvidersModule {}
