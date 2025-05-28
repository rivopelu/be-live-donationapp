import type { Context } from 'hono';
import { ResponseHelper } from '../utils/response-helper.js';
import type { IUser } from '../types/type/IAuthUser.js';

export class AccountController {
  async me(c: Context) {
    const user: IUser = c.get('user');
    return c.json(ResponseHelper.data(user));
  }
}
