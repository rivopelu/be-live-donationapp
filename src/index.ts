import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import loggerMiddleware from './middleware/logger-middleware';
import { Env } from './constants/env';
import corsConfig from './configs/cors.config';
import setupApiRoutes from './routes/_app.routes';
import { ErrorHandler } from './utils/error-handler';
import { logger } from './utils/logger';

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
