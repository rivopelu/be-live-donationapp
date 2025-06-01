import type { Context } from 'hono';
import { ResponseHelper } from '../utils/response-helper';
import type { IReqCreateDonation } from '../types/request/IReqCreateDonation';
import { GifterRepository } from '../repositories/gifter.repository';
import { AccountRepository } from '../repositories/account.repository';
import { NotFoundException } from '../utils/exception';
import { OverlayRepository } from '../repositories/overlay.repository';
import { db } from '../db/database';
import { TransactionEntity } from '../entities/transaction.entity';
import { TRANSACTION_STATUS_ENUM } from '../enums/transaction-status-enum';

export class TransactionController {
  async createDonation(c: Context) {
    const body = await c.req.json<IReqCreateDonation>();
    const findAccount = await AccountRepository.findByUsername(body.username);

    if (!findAccount) {
      throw new NotFoundException('Account not found.');
    }

    const findOverlay = await OverlayRepository.findByUserIdAndType(
      findAccount.id,
      body.type,
    );

    if (!findOverlay) {
      throw new NotFoundException('Overlay not found.');
    }

    const gifter = await GifterRepository.findByEmailOrCreateAndReturnId(
      body.email,
      body.from,
    );

    const transactionId = await db
      .insert(TransactionEntity)
      .values({
        message: body.message,
        amount: body.amount,
        type: body.type,
        status: TRANSACTION_STATUS_ENUM.CREATED,
        payment_type: body.payment_type,
        account_id: findAccount.id,
        overlay_id: findOverlay.id,
        gifter_id: gifter,
      })
      .$returningId();

    return c.json(
      ResponseHelper.data({
        gifter_id: gifter,
        transaction_id: transactionId[0].id,
      }),
    );
  }
}
