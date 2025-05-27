import { NextFunction, Request, Response } from 'express';
import { IReqSignUp } from '../types/request/IReqSignUp';
import bcrypt from 'bcryptjs';
import { db } from '../db/database';
import { AccountEntity } from '../entities/account.entity';
import { AccountRepository } from '../repositories/account.repository';
import { BadRequestException } from '../utils/exception';

export class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    const body: IReqSignUp = req.body;
    const findEmail = await AccountRepository.findByIdEmail(body.email);
    if (findEmail) {
      throw new BadRequestException('Email already exists');
    }

    const hashPassword = await bcrypt.hash(req.body.password, 8);

    await db.insert(AccountEntity).values({
      email: body.email,
      password: hashPassword,
      name: body.name,
    });
    try {
      res.success('OKE');
    } catch (e) {
      next(e);
    }
  }

  async ping(_req: Request, res: Response, next: NextFunction) {
    try {
      res.json({ app: 'pong' });
    } catch (error) {
      next(error);
    }
  }
}
