import { db } from '../db/database';
import { OverlayEntity } from '../entities/overlay.entity';
import { and, eq } from 'drizzle-orm';

export class OverlayRepository {
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
