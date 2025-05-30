import type { Context } from 'hono';
import { ResponseHelper } from '../utils/response-helper';
import { OverlayTypeEnum } from '../enums/overlay-type-enum';
import type { IReqCreateOverlay } from '../types/request/IReqCreateOverlay';
import { db } from '../db/database';
import { OverlayEntity } from '../entities/overlay.entity';
import { OverlayRepository } from '../repositories/overlay.repository';
import { BadRequestException, NotFoundException } from '../utils/exception';
import type { IResListOverlay } from '../types/response/IResListOverlay';
import type { IResDetailOverlay } from '../types/response/IResDetailOverlay';

export class OverlayController {
  async detailOverlay(c: Context) {
    const userId = c.get('user')?.id;
    const id = c.req.param()?.id;
    const findData = await OverlayRepository.findByIdAndUser(id, userId);
    if (!findData) {
      throw new NotFoundException();
    }
    const data: IResDetailOverlay = {
      id: findData.id,
      type: findData.type as OverlayTypeEnum,
      text: findData.text,
      created_date: findData.createdDate,
      background_color: findData?.background_color,
      highlight_color: findData?.highlight_color,
      text_color: findData?.text_color,
    };
    return c.json(ResponseHelper.data(data));
  }

  async detailPublicOverlay(c: Context) {
    const id = c.req.param()?.id;
    const findData = await OverlayRepository.findById(id);
    if (!findData) {
      throw new NotFoundException();
    }
    const data: IResDetailOverlay = {
      id: findData.id,
      type: findData.type as OverlayTypeEnum,
      text: findData.text,
      created_date: findData.createdDate,
      background_color: findData?.background_color,
      highlight_color: findData?.highlight_color,
      text_color: findData?.text_color,
    };
    return c.json(ResponseHelper.data(data));
  }

  async editOverlay(c: Context) {
    const id = c.req.param()?.id;
    const body = await c.req.json<IReqCreateOverlay>();
    const userId = c.get('user').id;

    const findUserOverlay = await OverlayRepository.findByIdAndUser(id, userId);
    if (!findUserOverlay) {
      throw new BadRequestException('Overlay not found');
    }
    await db.update(OverlayEntity).set({
      text: body.text,
      updatedBy: userId,
      updatedDate: new Date(),
      background_color: body.background_color,
      highlight_color: body.highlight_color,
      text_color: body.text_color,
    });
    return c.json(ResponseHelper.success());
  }

  async getUserOverlayList(c: Context) {
    const userId = c.get('user')?.id;
    const data = await OverlayRepository.getAllUserOverlays(userId);
    const dataRes: IResListOverlay[] = data.map((item) => {
      return {
        id: item.id,
        type: item.type,
        text: item.text,

        created_date: item.createdDate,
      };
    }) as IResListOverlay[];
    return c.json(ResponseHelper.data(dataRes));
  }

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
      background_color: body.background_color,
      highlight_color: body.highlight_color,
      text_color: body.text_color,
    });
    return c.json(ResponseHelper.data(body));
  }
}
