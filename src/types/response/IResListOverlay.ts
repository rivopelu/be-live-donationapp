import type { OverlayTypeEnum } from '../../enums/overlay-type-enum';

export interface IResListOverlay {
  type: OverlayTypeEnum;
  text?: string | null;
  id: string;
  created_date: Date;
}
