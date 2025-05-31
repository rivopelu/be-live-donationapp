import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { baseEntity } from '../db/base-entity';

export const GiftTerEntity = mysqlTable('gifter', {
  ...baseEntity,
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar({ length: 256 }).notNull().unique(),
});
