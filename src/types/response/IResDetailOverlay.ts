import type { OverlayTypeEnum } from '../../enums/overlay-type-enum';

export interface IResDetailOverlay {
  id: string;
  created_date: Date;
  text?: string | null;
  type?: OverlayTypeEnum | null;
  background_color?: string | null;
  text_color?: string | null;
  highlight_color?: string | null;
}
