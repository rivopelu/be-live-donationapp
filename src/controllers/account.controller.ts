import type { Context } from 'hono';
import { ResponseHelper } from '../utils/response-helper';
import type { IUser } from '../types/type/IAuthUser';

export class AccountController {
  async me(c: Context) {
    const user: IUser = c.get('user');
    return c.json(ResponseHelper.data(user));
  }
}
