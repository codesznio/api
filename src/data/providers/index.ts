import { Module } from '@nestjs/common'

// Providers
import { MongoDatabaseProviderModule } from '@/data/mongo/mongo.provider'

@Module({
    imports: [MongoDatabaseProviderModule],
})
export class ProvidersModule {}
