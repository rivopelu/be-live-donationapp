"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const base_entity_1 = require("../db/base-entity");
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.Account = (0, mysql_core_1.mysqlTable)('account', Object.assign(Object.assign({}, base_entity_1.baseEntity), { name: (0, mysql_core_1.varchar)('name', { length: 256 }).notNull(), email: (0, mysql_core_1.varchar)({ length: 256 }).notNull().unique(), password: (0, mysql_core_1.varchar)({ length: 1000 }).notNull(), profilePicture: (0, mysql_core_1.varchar)('profile picture', { length: 1000 }) }));
//# sourceMappingURL=account.entity.js.map