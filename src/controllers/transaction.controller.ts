import type { Context } from 'hono';
import { ResponseHelper } from '../utils/response-helper';

export class TransactionController {
  async createDonation(c: Context) {
    return c.json(ResponseHelper.success('OKE'));
  }
}
