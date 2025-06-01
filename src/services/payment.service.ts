import { Env } from '../constants/env';
import { HttpService } from './http.service';
import { PAYMENT_TYPE_ENUM } from '../enums/payment-type-enum';
import { parsePaymentBankTransfer } from '../utils/parse-payment-type';

export class PaymentService {
  private httpService: HttpService;

  constructor() {
    if (!Env.MIDTRANS_SERVER_KEY) {
      throw new Error('not found MIDTRANS_SERVER_KEY');
    }
    const encodedMidtransServerKey = Buffer.from(
      Env.MIDTRANS_SERVER_KEY!,
    ).toString('base64');

    this.httpService = new HttpService(
      Env.MIDTRANS_BASE_URL!,
      encodedMidtransServerKey,
    );
  }
  public async createPaymentBankTransfer(
    id: string,
    amount: number,
    payment_type: PAYMENT_TYPE_ENUM,
  ) {
    const paymentMethod = parsePaymentBankTransfer(payment_type);
    const reqData = {
      payment_type: 'bank_transfer',
      transaction_details: {
        order_id: id,
        gross_amount: amount,
      },
      bank_transfer: {
        bank: paymentMethod,
      },
    };
    const res = await this.httpService.POST('', reqData);
    return res.data;
  }
}
