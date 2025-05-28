import type { Context, Next } from 'hono';
import { UnauthorizedException } from '../utils/exception.js';
import { ENV } from '../constants/env,.js';
import jwt from 'jsonwebtoken';
import type { IUser } from '../types/type/IAuthUser.js';

const verifyToken = (c: Context, next: Next) => {
  const authHeader = c.req.header()['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedException('No token provided or invalid format');
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, ENV.JWT_SECRET, (err, decoded) => {
    if (err) {
      throw new UnauthorizedException('Unauthorized');
    }

    c.set('user', decoded as IUser);
    next().then();
  });
};

export default verifyToken;
