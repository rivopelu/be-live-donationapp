import type { Context } from 'hono';
import { ResponseHelper } from '../utils/response-helper';
import { OverlayTypeEnum } from '../enums/overlay-type-enum';

export class OverlayController {
  async getListTypeOverlay(c: Context) {
    const data = Object.values(OverlayTypeEnum);
    return c.json(ResponseHelper.data(data));
  }

  async create(c: Context) {
    const body = await c.req.json();
    return c.json(ResponseHelper.data(body));
  }
}
