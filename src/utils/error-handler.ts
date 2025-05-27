import { NextFunction, Request, Response } from 'express';

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.error(err);
  res.status(err.status || 500).json({
    status: err.status || 500,
    success: false,
    message: err.message || 'Internal Server Error',
  });
};
