import { type Context } from 'hono';
import type { Next } from 'hono';

const loggerMiddleware = async (c: Context, next: Next) => {
  const start = Date.now();
  await next();

  const duration = Date.now() - start;
  const req = c.req;
  const res = c.res;

  let dataLog: {
    method: string;
    url: string;
    path: string;
    query: Record<string, string>;
    status_code: number;
    duration: number;
    user_agent: string | null;
    origin: string | null;
    referer: string | null;
    ip_address: string | null;
    has_auth_header: boolean;
    authorization: string | null;
  };
  dataLog = {
    method: req.method,
    url: req.url,
    path: req.path,
    query: req.query(),

    status_code: res.status,
    duration: duration,

    user_agent: req.header('user-agent') || null,
    origin: req.header('origin') || null,
    referer: req.header('referer') || null,

    ip_address:
      req.header('x-forwarded-for') ||
      req.raw.headers.get('x-forwarded-for') ||
      null,

    has_auth_header: !!req.header('authorization'),
    authorization: req.header('authorization') || null,
  };

  console.log(dataLog);
  console.log(
    `[${req.method}] ${req.url} - Status: ${res.status} - ${duration}ms`,
  );
};

export default loggerMiddleware;
