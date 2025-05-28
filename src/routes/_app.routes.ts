import { Hono } from 'hono';
import { AuthRoutes } from './auth.routes';
import { AccountRoutes } from './account.routes';
import { OverlayRoutes } from './overlay.routes';

const app = new Hono().basePath('/api');
app.route('/auth', AuthRoutes);
app.route('/account', AccountRoutes);
app.route('/overlay', OverlayRoutes);

export default app;
