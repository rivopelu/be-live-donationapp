import { db } from '../db/database';
import { TransactionEntity } from '../entities/transaction.entity';
import { eq } from 'drizzle-orm';

export class TransactionRepository {
  static async findById(id: string) {
    const findData = await db
      .select()
      .from(TransactionEntity)
      .where(eq(TransactionEntity.id, id));
    return findData[0];
  }
}
