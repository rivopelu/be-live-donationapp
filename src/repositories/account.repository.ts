import { eq, or } from 'drizzle-orm';
import { AccountEntity } from '../entities/account.entity';
import { db } from '../db/database';

export class AccountRepository {
  static async findByIdEmail(email: string) {
    const data = await db
      .select()
      .from(AccountEntity)
      .where(eq(AccountEntity.email, email));
    return data[0];
  }

  static async findByUsername(username: string) {
    const data = await db
      .select()
      .from(AccountEntity)
      .where(eq(AccountEntity.username, username));
    return data[0];
  }

  static async findByEmailOrUsername(v: string) {
    const data = await db
      .select()
      .from(AccountEntity)
      .where(or(eq(AccountEntity.email, v), eq(AccountEntity.username, v)));
    return data[0];
  }
}
