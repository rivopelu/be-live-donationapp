"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHelper = void 0;
class ResponseHelper {
    static success(message) {
        return { success: true, message };
    }
    static data(data, message = 'success') {
        return { success: true, message, response_data: data };
    }
    static paginated(data, totalData, page, size, message = 'success') {
        return {
            success: true,
            message,
            response_data: data,
            paginated_data: {
                page,
                size,
                total_data: totalData,
                page_count: Math.ceil(totalData / size),
            },
        };
    }
    static error(message) {
        return { success: false, message };
    }
    static sendSuccess(res, message, statusCode = 200) {
        res.status(statusCode).json(this.success(message));
    }
    static sendData(res, data, statusCode = 200) {
        res.status(statusCode).json(this.data(data));
    }
    static sendPaginated(res, data, totalData, page, size, statusCode = 200, message = '') {
        res
            .status(statusCode)
            .json(this.paginated(data, totalData, page, size, message));
    }
    static sendError(res, message, statusCode = 400) {
        res.status(statusCode).json(this.error(message));
    }
}
exports.ResponseHelper = ResponseHelper;
//# sourceMappingURL=response-helper.js.map