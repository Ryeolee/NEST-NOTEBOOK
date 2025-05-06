import { ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2/promise';

export const getDbConfig = (configService: ConfigService) => ({
  host: configService.get<string>('database.host'),
  port: configService.get<number>('database.port'),
  user: configService.get<string>('database.user'),
  password: configService.get<string>('database.password'),
  database: configService.get<string>('database.schema'),
  connectTimeout: 3,
});

let pool: mysql.Pool;

export const initDbPool = (configService: ConfigService) => {
  if (!pool) {
    pool = mysql.createPool({
      ...getDbConfig(configService),
      connectionLimit: 2,
      idleTimeout: 1000,
    });
  }
  return pool;
};

export const getDbPool = () => {
  if (!pool) throw new Error('DB pool is not initialized.');
  return pool;
};
