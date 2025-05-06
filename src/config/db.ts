import { ConfigService } from '@nestjs/config';

export const getDbConfig = (configService: ConfigService) => ({
  host: configService.get<string>('database.host'),
  port: configService.get<number>('database.port'),
  user: configService.get<string>('database.user'),
  password: configService.get<string>('database.password'),
  database: configService.get<string>('database.schema'),
});
