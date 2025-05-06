import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

const dev = {
  host: configService.get<string>('database.host'),
  port: configService.get<number>('database.port'),
  user: configService.get<string>('database.user'),
  password: configService.get<string>('database.password'),
  database: configService.get<string>('database.schema'),
};

export { dev };
