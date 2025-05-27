"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../src/utils/logger");
const app_1 = __importDefault(require("./app"));
const env_1 = require("../src/constants/env,");
app_1.default.listen(env_1.ENV.PORT, () => {
    logger_1.logger.info(`RUNNING ON PORT [${env_1.ENV.PORT}] --- ENV : ${env_1.ENV.NODE_ENV} `);
});
//# sourceMappingURL=index.js.map