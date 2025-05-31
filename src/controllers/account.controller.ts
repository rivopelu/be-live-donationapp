import type { Context } from 'hono';
import { ResponseHelper } from '../utils/response-helper';
import type { IUser } from '../types/type/IAuthUser';
import { AccountRepository } from '../repositories/account.repository';
import { NotFoundException } from '../utils/exception';
import type { IResDetailUserDonation } from '../types/response/IResDetailUserDonation';

export class AccountController {
  async getUser(c: Context) {
    const { username } = c.req.param();

    const user = await AccountRepository.findByUsername(username);
    if (!user) {
      throw new NotFoundException('User does not exist');
    }
    const data: IResDetailUserDonation = {
      name: user.name,
      username: user.username,
      profile_picture: user?.profilePicture,
    };
    return c.json(ResponseHelper.data(data));
  }
  async me(c: Context) {
    const user: IUser = c.get('user');
    return c.json(ResponseHelper.data(user));
  }
}
