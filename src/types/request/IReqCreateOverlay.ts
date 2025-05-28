import type { OverlayTypeEnum } from '../../enums/overlay-type-enum';

export interface IReqCreateOverlay {
  text: string;
  type: OverlayTypeEnum;
}
