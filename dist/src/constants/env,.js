"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV = void 0;
require("dotenv/config");
exports.ENV = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: Number(process.env.DB_PORT),
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    JWT_SECRET: String(process.env.JWT_SECRET),
    TELEGRAM_PERSONAL_ID: process.env.TELEGRAM_PERSONAL_ID,
};
//# sourceMappingURL=env,.js.map