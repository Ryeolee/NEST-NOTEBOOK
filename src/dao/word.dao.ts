import * as mysql from 'mysql2/promise';
import { getDbConfig } from '../config/db';
import { ConfigService } from '@nestjs/config';

export const getWords = async (configService: ConfigService) => {
  const connection = await mysql.createConnection(getDbConfig(configService)); // DB 커넥션 생성
  await connection.connect();
  try {
    const query = `select * from WORDS limit 100`;
    const [result] = await connection.query(query);
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    connection.end();
  }
};
