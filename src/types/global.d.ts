import type { IUser } from './type/IAuthUser'; // Adjust the path as needed

declare module 'hono' {
  interface ContextVariableMap {
    user: IUser;
  }
}
