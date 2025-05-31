import { Hono } from 'hono';
import { TransactionController } from '../controllers/transaction.controller';

const router = new Hono();
const controller = new TransactionController();
router.post('/v1/create-donation', controller.createDonation);

export const TransactionRoutes = router;
