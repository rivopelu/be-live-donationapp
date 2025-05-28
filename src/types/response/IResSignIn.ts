import type { IUser } from '../type/IAuthUser';

export interface IResSignIn {
  access_token: string;
  user_data: IUser;
}
