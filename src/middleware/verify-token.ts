import type { Context, Next } from 'hono';
import { UnauthorizedException } from '../utils/exception.ts';
import { Env } from '../constants/env.ts';
import jwt from 'jsonwebtoken';
import type { IUser } from '../types/type/IAuthUser.ts';

const verifyToken = (c: Context, next: Next) => {
  const authHeader = c.req.header()['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedException('No token provided or invalid format');
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, Env.JWT_SECRET, (err, decoded) => {
    if (err) {
      throw new UnauthorizedException('Unauthorized');
    }

    c.set('user', decoded as IUser);
    next().then();
  });
};

export default verifyToken;
