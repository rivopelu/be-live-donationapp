import type { OverlayTypeEnum } from '../../enums/overlay-type-enum';

export interface IReqCreateDonation {
  from: string;
  message: string;
  email: string;
  amount: number;
  username: string;
  type: OverlayTypeEnum;
}
