import { eq } from 'drizzle-orm';
import { AccountEntity } from '../entities/account.entity.ts';
import { db } from '../db/database.ts';

export class AccountRepository {
  static async findByIdEmail(email: string) {
    const data = await db
      .select()
      .from(AccountEntity)
      .where(eq(AccountEntity.email, email));
    return data[0];
  }
}
