import type { IUser } from './type/IAuthUser.ts'; // Adjust the path as needed

declare module 'hono' {
  interface ContextVariableMap {
    user: IUser;
  }
}
