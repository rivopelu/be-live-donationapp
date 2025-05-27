"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseEntity = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const uuid_1 = require("uuid");
exports.baseEntity = {
    id: (0, mysql_core_1.varchar)({ length: 255 })
        .primaryKey()
        .$defaultFn(() => (0, uuid_1.v4)().split('-').join('').toUpperCase()),
    active: (0, mysql_core_1.boolean)().default(true).notNull(),
    createdDate: (0, mysql_core_1.timestamp)('created_date').notNull().defaultNow(),
    createdBy: (0, mysql_core_1.varchar)('created_by', { length: 256 })
        .notNull()
        .default('SYSTEM'),
    updatedDate: (0, mysql_core_1.timestamp)('updated_date').notNull().defaultNow(),
    updatedBy: (0, mysql_core_1.varchar)('updated_by', { length: 256 }),
    deletedBy: (0, mysql_core_1.varchar)('deleted_by', { length: 256 }),
    deletedDate: (0, mysql_core_1.timestamp)('deleted_date').defaultNow(),
};
//# sourceMappingURL=base-entity.js.map