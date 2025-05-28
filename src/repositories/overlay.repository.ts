import { db } from '../db/database';
import { OverlayEntity } from '../entities/overlay.entity';
import { and, eq } from 'drizzle-orm';

export class OverlayRepository {
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
