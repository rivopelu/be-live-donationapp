import type { IUser } from '../type/IAuthUser.ts';

export interface IResSignIn {
  access_token: string;
  user_data: IUser;
}
