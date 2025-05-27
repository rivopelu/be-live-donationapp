"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const mysql2_2 = require("drizzle-orm/mysql2");
const env_1 = require("../constants/env,");
const connection = mysql2_1.default.createConnection({
    host: env_1.ENV.DB_HOST,
    user: env_1.ENV.DB_USER,
    password: env_1.ENV.DB_PASSWORD,
    database: env_1.ENV.DB_NAME,
    port: env_1.ENV.DB_PORT,
});
exports.db = (0, mysql2_2.drizzle)(connection);
//# sourceMappingURL=database.js.map