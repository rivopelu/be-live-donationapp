import { Hono } from 'hono';
import { OverlayController } from '../controllers/overlay.controller';
import verifyToken from '../middleware/verify-token';

const router = new Hono();
const controller = new OverlayController();
router.post('/v1/create', verifyToken, controller.create);
router.get('/v1/type-list', controller.getListTypeOverlay);
router.get('/v1/user/list', verifyToken, controller.getUserOverlayList);
router.put('/v1/edit/:id', verifyToken, controller.editOverlay);
router.get('/v1/detail/:id', verifyToken, controller.detailOverlay);
router.get('/v1/public-overlay/:id', controller.detailPublicOverlay);

export const OverlayRoutes = router;
