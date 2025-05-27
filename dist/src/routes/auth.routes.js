"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
const controller = new auth_controller_1.AuthController();
router.get('/ping', controller.ping);
exports.AuthRoutes = router;
//# sourceMappingURL=auth.routes.js.map