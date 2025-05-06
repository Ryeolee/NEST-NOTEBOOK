import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './config/configuration';
import { initDbPool } from './config/db';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: 'DB_POOL',
      useFactory: (configService: ConfigService) => initDbPool(configService),
      inject: [ConfigService],
    },
    AppService,
  ],
})
export class AppModule {}
