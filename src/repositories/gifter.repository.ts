import { db } from '../db/database';
import { GiftTerEntity } from '../entities/gifter.entity';
import { eq } from 'drizzle-orm';

export class GifterRepository {
  public static async findByEmail(email: string) {
    const data = await db
      .select()
      .from(GiftTerEntity)
      .where(eq(GiftTerEntity.email, email));
    return data[0];
  }

  static async findByEmailOrCreateAndReturnId(
    email: string,
    name: string,
  ): Promise<string> {
    let gifterId = '';
    const gifter = await GifterRepository.findByEmail(email);
    if (!gifter) {
      const newData = await db
        .insert(GiftTerEntity)
        .values({
          name: name,
          email: email,
        })
        .$returningId();
      gifterId = newData[0]?.id;
    } else {
      gifterId = gifter.id;
      await db
        .update(GiftTerEntity)
        .set({
          name: name,
        })
        .where(eq(GiftTerEntity.id, gifterId));
    }
    return gifterId;
  }
}
