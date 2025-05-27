import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
const controller = new AuthController();
router.get('/ping', controller.ping);
router.post('/v1/sign-up', controller.signUp);

export const AuthRoutes = router;
