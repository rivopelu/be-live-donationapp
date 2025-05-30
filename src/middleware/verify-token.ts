import type { Context, Next } from 'hono';
import { UnauthorizedException } from '../utils/exception';
import { Env } from '../constants/env';
import type { IUser } from '../types/type/IAuthUser';
import { HTTPException } from 'hono/http-exception';
import jwt from 'jsonwebtoken';
const verifyToken = async (c: Context, next: Next) => {
  const authHeader = c.req.header('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedException('No token provided or invalid format');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, Env.JWT_SECRET) as IUser;
    c.set('user', decoded);
  } catch (err) {
    throw new HTTPException(401, { message: 'Unauthorized' });
  }

  await next();
};

export default verifyToken;
