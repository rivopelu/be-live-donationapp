import mysql from 'mysql2';
import { drizzle } from 'drizzle-orm/mysql2';
import { Env } from '../constants/env.ts';

const connection = mysql.createConnection({
  host: Env.DB_HOST,
  user: Env.DB_USER,
  password: Env.DB_PASSWORD,
  database: Env.DB_NAME,
  port: Env.DB_PORT,
});

export const db = drizzle(connection);
