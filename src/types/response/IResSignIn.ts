import type { IUser } from '../type/IAuthUser.js';

export interface IResSignIn {
  access_token: string;
  user_data: IUser;
}
