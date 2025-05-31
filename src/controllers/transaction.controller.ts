import type { Context } from 'hono';
import { ResponseHelper } from '../utils/response-helper';
import type { IReqCreateDonation } from '../types/request/IReqCreateDonation';
import { GifterRepository } from '../repositories/gifter.repository';
import { AccountRepository } from '../repositories/account.repository';
import { NotFoundException } from '../utils/exception';
import { OverlayRepository } from '../repositories/overlay.repository';

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

    return c.json(
      ResponseHelper.data({
        gifterId: gifter,
      }),
    );
  }
}
