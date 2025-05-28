import { Hono } from 'hono';
import { AuthRoutes } from './auth.routes';
import { AccountRoutes } from './account.routes';

const app = new Hono().basePath('/api');
app.route('/auth', AuthRoutes);
app.route('/account', AccountRoutes);

export default app;
