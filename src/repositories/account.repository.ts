import { db } from '../db/database';
import { AccountEntity } from '../entities/account.entity';
import { eq } from 'drizzle-orm';

export class AccountRepository {
  static async findByIdEmail(email: string) {
    const data = await db
      .select()
      .from(AccountEntity)
      .where(eq(AccountEntity.email, email));
    return data[0];
  }
}
