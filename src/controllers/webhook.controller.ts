import type { Context } from 'hono';
import type { IReqPaymentNotificationWebhook } from '../types/request/IReqPaymentNotificationWebhook';
import { ResponseHelper } from '../utils/response-helper';
import { TransactionRepository } from '../repositories/transaction.repository';
import { BadRequestException } from '../utils/exception';
import { db } from '../db/database';
import { TransactionEntity } from '../entities/transaction.entity';
import { TRANSACTION_STATUS_ENUM } from '../enums/transaction-status-enum';
import { eq } from 'drizzle-orm';

export class WebhookController {
  async midtransNotificationAfterPayment(c: Context) {
    const body = await c.req.json<IReqPaymentNotificationWebhook>();
    const order = await TransactionRepository.findById(body.order_id);
    if (!order) {
      throw new BadRequestException('Order not found');
    }

    if (body.transaction_status === 'settlement') {
      await db
        .update(TransactionEntity)
        .set({
          status: TRANSACTION_STATUS_ENUM.SETTLEMENT,
          updatedDate: new Date(),
        })
        .where(eq(TransactionEntity.id, order.id));
    }

    return c.json(ResponseHelper.success('Oke'));
  }
}
