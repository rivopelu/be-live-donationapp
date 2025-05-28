import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { baseEntity } from '../db/base-entity.js';
export const AccountEntity = mysqlTable('account', {
    ...baseEntity,
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar({ length: 256 }).notNull().unique(),
    password: varchar({ length: 1000 }).notNull(),
    profilePicture: varchar('profile picture', { length: 1000 }),
});
