import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import loggerMiddleware from './middleware/logger-middleware';
import { Env } from './constants/env';
import corsConfig from './configs/cors.config';
import setupApiRoutes from './routes/_app.routes';
import { ErrorHandler } from './utils/error-handler';
import { logger } from './utils/logger';
import { createNodeWebSocket } from '@hono/node-ws';
import { setupWs } from './configs/ws.config';

const app = new Hono();
const { injectWebSocket, upgradeWebSocket } = createNodeWebSocket({ app });

app.use(loggerMiddleware);
app.use(corsConfig);
app.use(corsConfig);
app.route('/', setupApiRoutes);
app.onError(ErrorHandler);
setupWs(app, upgradeWebSocket);

const server = serve(
  {
    fetch: app.fetch,
    port: Number(Env.PORT),
  },
  (info) => {
    logger.info(`Server is running on http://localhost:${info.port}`);
  },
);
injectWebSocket(server);
