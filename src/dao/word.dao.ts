import * as mysql from 'mysql2/promise';
import { getDbConfig, getDbPool } from '../config/db';
import { ConfigService } from '@nestjs/config';

export const getWords = async (configService: ConfigService) => {
  //   const connection = await mysql.createConnection(getDbConfig(configService)); // DB 커넥션 생성
  //   await connection.connect();
  try {
    const pool = getDbPool();

    const query = `select * from WORDS limit 10000`;
    // const [result] = await pool.query(query);
    // console.log(result);
    // return result;
    const [a] = await Promise.all([
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
      pool.query(query),
    ]);
  } catch (error) {
    console.log(error);
  } finally {
    // connection.end();
  }
};
