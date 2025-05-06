import { ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2/promise';

export const getDbConfig = (configService: ConfigService) => ({
  host: configService.get<string>('database.host'),
  port: configService.get<number>('database.port'),
  user: configService.get<string>('database.user'),
  password: configService.get<string>('database.password'),
  database: configService.get<string>('database.schema'),
  connectTimeout: 3000, // db 연결 타임아웃
});

let pool: mysql.Pool;

export const initDbPool = (configService: ConfigService) => {
  if (!pool) {
    pool = mysql.createPool({
      ...getDbConfig(configService),
      waitForConnections: true,
      connectionLimit: 2, // 커넥션 풀 크기
      idleTimeout: 20000, // 커넥션의 유지 시간
    });
  }
  return pool;
};
// ❌ 커넥션 풀에서 커넥션을 얻는 데 대기할 수 있는 최대 시간 설정은 없음
export const getDbPool = () => {
  if (!pool) throw new Error('DB pool is not initialized.');
  return pool;
};
