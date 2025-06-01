import type { OverlayTypeEnum } from '../../enums/overlay-type-enum';
import type { PAYMENT_TYPE_ENUM } from '../../enums/payment-type-enum';

export interface IReqCreateDonation {
  from: string;
  message: string;
  email: string;
  amount: number;
  username: string;
  payment_type: PAYMENT_TYPE_ENUM;
  type: OverlayTypeEnum;
}
