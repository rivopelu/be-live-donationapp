import { AccountRepository } from '../repositories/account.repository.js';
import { BadRequestException } from '../utils/exception.js';
import bcrypt from 'bcryptjs';
import { AccountEntity } from '../entities/account.entity.js';
import { db } from '../db/database.js';
import { ResponseHelper } from '../utils/response-helper.js';
import jwt from 'jsonwebtoken';
import { ENV } from '../constants/env,.js';
import { generateProfilePicture } from '../utils/utils.js';
export class AuthController {
    async signIn(c) {
        const body = await c.req.json();
        const findData = await AccountRepository.findByIdEmail(body.email);
        if (!findData) {
            throw new BadRequestException('Sign in failed');
        }
        const passwordMatch = await bcrypt.compare(body.password, findData.password);
        if (!passwordMatch) {
            throw new BadRequestException('Sign in failed');
        }
        const user = findData;
        const verifyUser = {
            name: user.name,
            created_by: user.createdBy,
            profile_picture: user.profilePicture,
            created_date: user.createdDate,
            email: user.email,
            id: user.id,
        };
        const token = jwt.sign(verifyUser, ENV.JWT_SECRET);
        const response = {
            access_token: token,
            user_data: verifyUser,
        };
        return c.json(ResponseHelper.data(response));
    }
    async signUp(c) {
        const body = await c.req.json();
        const findEmail = await AccountRepository.findByIdEmail(body.email);
        if (findEmail) {
            throw new BadRequestException('Email already exists');
        }
        const hashPassword = await bcrypt.hash(body.password, 8);
        await db.insert(AccountEntity).values({
            email: body.email,
            password: hashPassword,
            profilePicture: generateProfilePicture(body.name),
            name: body.name,
        });
        c.status(201);
        return c.json(ResponseHelper.success('Account success created'));
    }
    async ping(c) {
        return c.json({ app: 'pong' });
    }
}
