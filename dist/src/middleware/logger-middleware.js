import {} from 'hono';
import { logger } from '../utils/logger.js';
const loggerMiddleware = async (c, next) => {
    const start = Date.now();
    await next();
    const duration = Date.now() - start;
    const req = c.req;
    const res = c.res;
    logger.info(`[${req.method}] ${req.url} - Status: ${res.status} - ${duration}ms`);
};
export default loggerMiddleware;
