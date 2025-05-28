import type { OverlayTypeEnum } from '../../enums/overlay-type-enum';

export interface IResDetailOverlay {
  id: string;
  created_date: Date;
  text?: string | null;
  type?: OverlayTypeEnum | null;
}
