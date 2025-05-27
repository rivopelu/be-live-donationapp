"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_middleware_1 = __importDefault(require("../src/middleware/logger-middleware"));
const cors_config_1 = __importDefault(require("../src/configs/cors.config"));
const response_enhance_1 = require("../src/middleware/response-enhance");
const _app_routes_1 = require("../src/routes/_app.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(logger_middleware_1.default);
app.use(cors_config_1.default);
app.use(response_enhance_1.responseEnhancer);
app.use(express_1.default.json());
app.use('/api', _app_routes_1.ApiRoutes);
exports.default = app;
//# sourceMappingURL=app.js.map