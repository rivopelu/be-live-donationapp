import { Hono } from 'hono';
import { AuthRoutes } from './auth.routes.ts';
import { AccountRoutes } from './account.routes.ts';

const app = new Hono().basePath('/api');
app.route('/auth', AuthRoutes);
app.route('/account', AccountRoutes);

export default app;
