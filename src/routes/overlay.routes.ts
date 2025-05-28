import { Hono } from 'hono';
import { OverlayController } from '../controllers/overlay.controller';
import verifyToken from '../middleware/verify-token';

const router = new Hono();
const controller = new OverlayController();
router.post('/v1/create', verifyToken, controller.create);
router.get('/v1/type-list', controller.getListTypeOverlay);

export const OverlayRoutes = router;
