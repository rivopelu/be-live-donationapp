import { Router } from 'express';
import {AuthController} from "../controllers/auth.controller";

const router = Router();
const controller = new AuthController();
router.get('/ping', controller.ping);

export const AuthRoutes = router;
