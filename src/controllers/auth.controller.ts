import { NextFunction, Request, Response } from 'express';
import { IReqSignUp } from '../types/request/IReqSignUp';
import bcrypt from 'bcryptjs';
import { db } from '../db/database';
import { AccountEntity } from '../entities/account.entity';
import { AccountRepository } from '../repositories/account.repository';
import { BadRequestException } from '../utils/exception';
import { IReqSignIn } from '../types/request/IReqSignIn';
import { IUser } from '../types/type/IAuthUser';
import { ENV } from '../constants/env,';
import jwt from 'jsonwebtoken';
import { IResSignIn } from '../types/response/IResSignIn';

export class AuthController {
  async signIn(req: Request, res: Response, next: NextFunction) {
    const body: IReqSignIn = req.body;
    const findData = await AccountRepository.findByIdEmail(body.email);

    if (!findData) {
      throw new BadRequestException('Sign in failed');
    }
    const passwordMatch = await bcrypt.compare(
      body.password,
      findData.password,
    );

    if (!passwordMatch) {
      throw new BadRequestException('Sign in failed');
    }
    const user = findData;
    const verifyUser: IUser = {
      name: user.name,
      created_by: user.createdBy,
      profile_picture: user.profilePicture,
      created_date: user.createdDate,
      email: user.email,
      id: user.id,
    };
    const token = jwt.sign(verifyUser, ENV.JWT_SECRET);
    const response: IResSignIn = {
      access_token: token,
      user_data: verifyUser,
    };
    res.data(response);
    try {
      res.data(req.body);
    } catch (e) {
      next(e);
    }
  }

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
