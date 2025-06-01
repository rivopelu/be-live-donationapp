import { PAYMENT_TYPE_ENUM } from '../enums/payment-type-enum';
import { BadRequestException } from './exception';

export function parsePaymentBankTransfer(payment_type: PAYMENT_TYPE_ENUM) {
  switch (payment_type) {
    case PAYMENT_TYPE_ENUM.VA_BCA:
      return 'bca';
    case PAYMENT_TYPE_ENUM.VA_BNI:
      return 'bni';
    case PAYMENT_TYPE_ENUM.VA_BRI:
      return 'bri';
    default:
      throw new BadRequestException('Bad Request payment method');
  }
}
