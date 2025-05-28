import { Hono } from 'hono';
import { AuthRoutes } from './auth.routes.js';
import { AccountRoutes } from './account.routes.js';

const app = new Hono().basePath('/api');
app.route('/auth', AuthRoutes);
app.route('/account', AccountRoutes);

export default app;
