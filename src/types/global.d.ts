import type { IUser } from './type/IAuthUser.js'; // Adjust the path as needed

declare module 'hono' {
  interface ContextVariableMap {
    user: IUser;
  }
}
