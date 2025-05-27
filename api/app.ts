import express, { Application } from 'express';
import loggerMiddleware from '../src/middleware/logger-middleware';
import corsConfig from '../src/configs/cors.config';
import { responseEnhancer } from '../src/middleware/response-enhance';
import { ApiRoutes } from '../src/routes/_app.routes';

const app: Application = express();

app.use(express.json());

app.use(loggerMiddleware);
app.use(corsConfig);
app.use(responseEnhancer);
app.use(express.json());

app.use('/api', ApiRoutes);

export default app;
