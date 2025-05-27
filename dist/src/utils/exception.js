"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.ForbiddenException = exports.UnauthorizedException = exports.BadRequestException = exports.NotFoundException = exports.HttpError = void 0;
const http_status_1 = require("../constants/http-status");
class HttpError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.HttpError = HttpError;
class NotFoundException extends HttpError {
    constructor(message = 'Resource not found') {
        super(http_status_1.HTTP_STATUS.NOT_FOUND, message);
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends HttpError {
    constructor(message = 'Bad request') {
        super(http_status_1.HTTP_STATUS.BAD_REQUEST, message);
    }
}
exports.BadRequestException = BadRequestException;
class UnauthorizedException extends HttpError {
    constructor(message = 'Unauthorized') {
        super(http_status_1.HTTP_STATUS.UNAUTHORIZED, message);
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ForbiddenException extends HttpError {
    constructor(message = 'Forbidden') {
        super(http_status_1.HTTP_STATUS.FORBIDDEN, message);
    }
}
exports.ForbiddenException = ForbiddenException;
class InternalServerError extends HttpError {
    constructor(message = 'Internal server error') {
        super(http_status_1.HTTP_STATUS.INTERNAL_SERVER_ERROR, message);
    }
}
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=exception.js.map