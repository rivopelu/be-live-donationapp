import { Hono } from 'hono';
import { MasterDataController } from '../controllers/master-data.controller';

const router = new Hono();
const controller = new MasterDataController();

router.get('/v1/payment-type-list', controller.getPaymentType);

export const MasterDataRoutes = router;
