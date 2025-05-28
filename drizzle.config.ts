import { defineConfig } from 'drizzle-kit';
import { Env } from './src/constants/env.ts';

export default defineConfig({
  dialect: 'mysql',
  out: './src/db/migrations',
  schema: './src/entities',
  dbCredentials: {
    host: String(Env.DB_HOST),
    user: String(Env.DB_USER),
    database: String(Env.DB_NAME),
    password: String(Env.DB_PASSWORD),
    port: Number(Env.PORT),
  },
  verbose: true,
  strict: true,
});
