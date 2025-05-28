import { Router } from 'express';
import { Hono } from 'hono';
import { AuthController } from '../controllers/auth.controller.js';
const router = new Hono();
const controller = new AuthController();
router.get('/ping', controller.ping);
router.post('/v1/sign-up', controller.signUp);
router.post('/v1/sign-in', controller.signIn);
export const AuthRoutes = router;
