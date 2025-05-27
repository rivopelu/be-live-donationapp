import { IUser } from './IAuthUser';
import 'express';

declare module 'express-serve-static-core' {
  interface Response {
    sentry?: string;
  }
}
declare global {
  namespace Express {
    export interface Request {
      user: IUser;
    }
  }
  namespace Express {
    interface Response {
      success(message: string, statusCode?: number): Response;
      data<T>(data: T, statusCode?: number): Response;
      paginated<T>(
        response_data: T,
        paginated_data: {
          total_data: number;
          page_count: number;
          size: number;
          page: number;
        },
        statusCode?: number,
        message?: string,
      ): Response;
      error(message: string, statusCode?: number): Response;
    }
  }
}
