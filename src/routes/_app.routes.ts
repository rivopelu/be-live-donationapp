import { Hono } from 'hono';
import { AuthRoutes } from './auth.routes.js';

const app = new Hono().basePath('/api');
app.route('/auth', AuthRoutes);

export default app;
