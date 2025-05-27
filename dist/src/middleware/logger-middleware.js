"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utils/logger");
const loggerMiddleware = (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        var _a, _b;
        const duration = Date.now() - start;
        const dataLog = {
            method: req.method,
            protocol: req.protocol,
            hostname: req.hostname,
            original_url: req.originalUrl,
            base_url: req.baseUrl,
            path: req.path,
            query: JSON.stringify(req.query),
            body: JSON.stringify(req.body),
            params: JSON.stringify(req.params),
            headers: JSON.stringify(req.headers),
            status_code: res.statusCode,
            duration: duration,
            content_length: String(res.getHeader('content-length') || '0'),
            user_id: ((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id) || null,
            user_email: ((_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.email) || null,
            user_agent: req.headers['user-agent'] || null,
            origin: req.headers['origin'] || null,
            referer: req.headers['referer'] || null,
            ip_address: Array.isArray(req.headers['x-forwarded-for'])
                ? req.headers['x-forwarded-for'][0]
                : req.headers['x-forwarded-for'] || req.ip,
            forwarded_host: Array.isArray(req.headers['x-forwarded-host'])
                ? req.headers['x-forwarded-host'][0]
                : req.headers['x-forwarded-host'] || null,
            forwarded_proto: Array.isArray(req.headers['x-forwarded-proto'])
                ? req.headers['x-forwarded-proto'][0]
                : req.headers['x-forwarded-proto'] || null,
            has_auth_header: !!req.headers['authorization'],
            authorization: req.headers['authorization'] || null,
        };
        logger_1.logger.info(`[${req.method}] ${req.originalUrl} - Status: ${res.statusCode} - ${duration}ms`);
    });
    next();
};
exports.default = loggerMiddleware;
//# sourceMappingURL=logger-middleware.js.map