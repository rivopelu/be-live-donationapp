import type { HTTPException } from 'hono/http-exception';
import type { Context } from 'hono';
import { ResponseHelper } from './response-helper.ts';

export function ErrorHandler(err: any, c: Context) {
  c.status(err.status || 500);
  return c.json(ResponseHelper.error(err.message, err.status || 500));
}
