import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import loggerMiddleware from './middleware/logger-middleware.ts';
import { Env } from './constants/env.ts';
import corsConfig from './configs/cors.config.ts';
import setupApiRoutes from './routes/_app.routes.ts';
import { ErrorHandler } from './utils/error-handler.ts';
import { logger } from './utils/logger.ts';

const app = new Hono();

app.use(loggerMiddleware);
app.use(corsConfig);
app.use(corsConfig);
app.route('/', setupApiRoutes);
app.onError(ErrorHandler);

serve(
  {
    fetch: app.fetch,
    port: Number(Env.PORT),
  },
  (info) => {
    logger.info(`Server is running on http://localhost:${info.port}`);
  },
);
