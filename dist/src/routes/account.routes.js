import { Hono } from 'hono';
import { AccountController } from '../controllers/account.controller.js';
import verifyToken from '../middleware/verify-token.js';
const router = new Hono();
const controller = new AccountController();
router.get('/v1/me', verifyToken, controller.me);
export const AccountRoutes = router;
