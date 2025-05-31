import { bigint, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { baseEntity } from '../db/base-entity';
import { OverlayTypeEnum } from '../enums/overlay-type-enum';
import { TRANSACTION_STATUS_ENUM } from '../enums/transaction-status-enum';
import { AccountEntity } from './account.entity';
import { GiftTerEntity } from './gifter.entity';
import { OverlayEntity } from './overlay.entity';

export const TransactionEntity = mysqlTable('transaction', {
  ...baseEntity,
  message: varchar({ length: 256 }).notNull().unique(),
  amount: bigint({ mode: 'number' }).notNull(),
  type: varchar({
    length: 256,
    enum: [
      OverlayTypeEnum.TEXT,
      OverlayTypeEnum.QR_CODE,
      OverlayTypeEnum.MILESTONE,
    ],
  })
    .notNull()
    .unique(),
  status: varchar({
    length: 255,
    enum: [
      TRANSACTION_STATUS_ENUM.CREATED,
      TRANSACTION_STATUS_ENUM.SUCCESS,
      TRANSACTION_STATUS_ENUM.SETTLEMENT,
      TRANSACTION_STATUS_ENUM.WAITING_PAYMENT,
      TRANSACTION_STATUS_ENUM.CANCELED,
    ],
  }),
  account_id: varchar('account_id', { length: 255 }).references(
    () => AccountEntity.id,
  ),

  overlay_entity: varchar('overlay_entity', { length: 255 }).references(
    () => OverlayEntity.id,
  ),
});
