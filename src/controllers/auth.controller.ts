import type { Context } from 'hono';
import type { IReqSignUp } from '../types/request/IReqSignUp.js';
import { AccountRepository } from '../repositories/account.repository.js';
import { BadRequestException } from '../utils/exception.js';
import bcrypt from 'bcryptjs';
import { AccountEntity } from '../entities/account.entity.js';
import { db } from '../db/database.js';
import { ResponseHelper } from '../utils/response-helper.js';
import jwt from 'jsonwebtoken';
import type { IReqSignIn } from '../types/request/IReqSignIn.js';
import type { IResSignIn } from '../types/response/IResSignIn.js';
import type { IUser } from '../types/type/IAuthUser.js';
import { ENV } from '../constants/env,.js';

export class AuthController {
  async signIn(c: Context) {
    const body: IReqSignIn = await c.req.json();
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
    return c.json(ResponseHelper.data(response));
  }

  async signUp(c: Context) {
    const body = await c.req.json<IReqSignUp>();
    const findEmail = await AccountRepository.findByIdEmail(body.email);
    if (findEmail) {
      throw new BadRequestException('Email already exists');
    }

    const hashPassword = await bcrypt.hash(body.password, 8);

    await db.insert(AccountEntity).values({
      email: body.email,
      password: hashPassword,
      name: body.name,
    });
    c.status(201);
    return c.json(ResponseHelper.success('Account success created'));
  }

  async ping(c: Context) {
    return c.json({ app: 'pong' });
  }
}
