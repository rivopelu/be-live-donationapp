import type { Context } from 'hono';
import { ResponseHelper } from '../utils/response-helper';
import { OverlayTypeEnum } from '../enums/overlay-type-enum';
import type { IReqCreateOverlay } from '../types/request/IReqCreateOverlay';
import { db } from '../db/database';
import { OverlayEntity } from '../entities/overlay.entity';
import { OverlayRepository } from '../repositories/overlay.repository';
import { BadRequestException } from '../utils/exception';

export class OverlayController {
  async getListTypeOverlay(c: Context) {
    const data = Object.values(OverlayTypeEnum);
    return c.json(ResponseHelper.data(data));
  }

  async create(c: Context) {
    const body = await c.req.json<IReqCreateOverlay>();
    const userId = c.get('user').id;
    if (!OverlayTypeEnum[body.type]) {
      throw new BadRequestException('Not Valid Enum');
    }
    const findUserOverlay = await OverlayRepository.getByUserId(userId);
    if (findUserOverlay) {
      throw new BadRequestException('User overlay already exists');
    }
    await db.insert(OverlayEntity).values({
      text: body.text,
      type: body.type,
      createdBy: userId,
      account_id: userId,
    });
    return c.json(ResponseHelper.data(body));
  }
}
