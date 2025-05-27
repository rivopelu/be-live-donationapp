"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRoutes = void 0;
const express_1 = require("express");
const auth_routes_1 = require("./auth.routes");
const router = (0, express_1.Router)();
router.use('/auth', auth_routes_1.AuthRoutes);
exports.ApiRoutes = router;
//# sourceMappingURL=_app.routes.js.map