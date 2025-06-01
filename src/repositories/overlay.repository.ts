import { db } from '../db/database';
import { OverlayEntity } from '../entities/overlay.entity';
import { and, eq } from 'drizzle-orm';
import type { OverlayTypeEnum } from '../enums/overlay-type-enum';

export class OverlayRepository {
  static async findById(id: string) {
    const data = await db
      .select()
      .from(OverlayEntity)
      .where(and(eq(OverlayEntity.id, id), eq(OverlayEntity.active, true)));
    return data[0];
  }

  static async findByUserIdAndType(id: string, type: OverlayTypeEnum) {
    const data = await db
      .select()
      .from(OverlayEntity)
      .where(
        and(
          eq(OverlayEntity.account_id, id),
          eq(OverlayEntity.type, type),
          eq(OverlayEntity.active, true),
        ),
      );
    return data[0];
  }
  static async findByIdAndUser(id: string, user: string) {
    const data = await db
      .select()
      .from(OverlayEntity)
      .where(
        and(
          eq(OverlayEntity.id, id),
          eq(OverlayEntity.account_id, user),
          eq(OverlayEntity.active, true),
        ),
      );
    return data[0];
  }
  static async getAllUserOverlays(userId: string) {
    return db
      .select()
      .from(OverlayEntity)
      .where(
        and(
          eq(OverlayEntity.account_id, userId),
          eq(OverlayEntity.active, true),
        ),
      );
  }

  static async getByUserId(userId: string) {
    const data = await db
      .select()
      .from(OverlayEntity)
      .where(
        and(
          eq(OverlayEntity.account_id, userId),
          eq(OverlayEntity.active, true),
        ),
      );
    return data[0];
  }
}
