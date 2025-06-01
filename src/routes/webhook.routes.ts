import { Hono } from 'hono';
import { TransactionController } from '../controllers/transaction.controller';
import { WebhookController } from '../controllers/webhook.controller';

const router = new Hono();
const controller = new WebhookController();
router.post(
  '/midtrans/v1/finish-order',
  controller.midtransNotificationAfterPayment,
);

export const WebhookRoutes = router;
