import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import loggerMiddleware from './middleware/logger-middleware.js';
import { ENV } from './constants/env,.js';
import corsConfig from './configs/cors.config.js';
import setupApiRoutes from './routes/_app.routes.js';
import { ErrorHandler } from './utils/error-handler.js';
import { logger } from './utils/logger.js';
const app = new Hono();
app.use(loggerMiddleware);
app.use(corsConfig);
app.use(corsConfig);
app.route('/', setupApiRoutes);
app.onError(ErrorHandler);
serve({
    fetch: app.fetch,
    port: Number(ENV.PORT),
}, (info) => {
    logger.info(`Server is running on http://localhost:${info.port}`);
});
