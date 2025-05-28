import { boolean, timestamp, varchar } from 'drizzle-orm/mysql-core';
import { v4 as uuidv4 } from 'uuid';
export const baseEntity = {
    id: varchar({ length: 255 })
        .primaryKey()
        .$defaultFn(() => uuidv4().split('-').join('').toUpperCase()),
    active: boolean().default(true).notNull(),
    createdDate: timestamp('created_date').notNull().defaultNow(),
    createdBy: varchar('created_by', { length: 256 })
        .notNull()
        .default('SYSTEM'),
    updatedDate: timestamp('updated_date').notNull().defaultNow(),
    updatedBy: varchar('updated_by', { length: 256 }),
    deletedBy: varchar('deleted_by', { length: 256 }),
    deletedDate: timestamp('deleted_date').defaultNow(),
};
