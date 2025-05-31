import { Hono } from 'hono';
import { AccountController } from '../controllers/account.controller';
import verifyToken from '../middleware/verify-token';

const router = new Hono();
const controller = new AccountController();

router.get('/v1/me', verifyToken, controller.me);
router.get('v1/user/:username', controller.getUser);

export const AccountRoutes = router;
