import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { baseEntity } from '../db/base-entity';
import { AccountEntity } from './account.entity';

export const OverlayEntity = mysqlTable('overlay', {
  ...baseEntity,
  type: varchar('type', { length: 35 }).notNull(),
  text: varchar('text', { length: 255 }),
  background_color: varchar('background_color', { length: 255 }).default(
    '#929191',
  ),
  text_color: varchar('text_color', { length: 255 }).default('#000'),
  highlight_color: varchar('highlight_color', { length: 255 }).default(
    '#a61398',
  ),
  account_id: varchar('account_id', { length: 255 }).references(
    () => AccountEntity.id,
  ),
});
