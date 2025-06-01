import { Hono } from 'hono';
import { AuthRoutes } from './auth.routes';
import { AccountRoutes } from './account.routes';
import { OverlayRoutes } from './overlay.routes';
import { TransactionRoutes } from './transactoin.routes';
import { MasterDataRoutes } from './master-data.routes';
import { WebhookRoutes } from './webhook.routes';

const app = new Hono().basePath('/api');
app.route('/auth', AuthRoutes);
app.route('/account', AccountRoutes);
app.route('/overlay', OverlayRoutes);
app.route('/transaction', TransactionRoutes);
app.route('/master-data', MasterDataRoutes);
app.route('/webhook', WebhookRoutes);

export default app;
