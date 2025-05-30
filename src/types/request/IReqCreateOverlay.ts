import type { OverlayTypeEnum } from '../../enums/overlay-type-enum';

export interface IReqCreateOverlay {
  text: string;
  type: OverlayTypeEnum;
  background_color: string;
  text_color: string;
  highlight_color: string;
}
