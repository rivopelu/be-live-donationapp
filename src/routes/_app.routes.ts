import { Hono } from 'hono';
import { AuthRoutes } from './auth.routes';
import { AccountRoutes } from './account.routes';
import { OverlayRoutes } from './overlay.routes';
import { TransactionRoutes } from './transactoin.routes';

const app = new Hono().basePath('/api');
app.route('/auth', AuthRoutes);
app.route('/account', AccountRoutes);
app.route('/overlay', OverlayRoutes);
app.route('/transaction', TransactionRoutes);

export default app;
