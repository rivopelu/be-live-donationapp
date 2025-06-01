import { PAYMENT_TYPE_ENUM } from '../enums/payment-type-enum';
import type { Context } from 'hono';
import { ResponseHelper } from '../utils/response-helper';

export class MasterDataController {
  async getPaymentType(c: Context) {
    const data = Object.values(PAYMENT_TYPE_ENUM);
    return c.json(ResponseHelper.data(data));
  }
}
