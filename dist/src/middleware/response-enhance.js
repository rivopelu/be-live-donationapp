"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseEnhancer = void 0;
const response_helper_1 = require("../utils/response-helper");
const responseEnhancer = (req, res, next) => {
    res.success = (message, statusCode = 200) => {
        return res.status(statusCode).json(response_helper_1.ResponseHelper.success(message));
    };
    res.data = function (data, statusCode = 200) {
        return res.status(statusCode).json(response_helper_1.ResponseHelper.data(data));
    };
    res.paginated = function (response_data, paginated_data, statusCode = 200, message) {
        return res
            .status(statusCode)
            .json(response_helper_1.ResponseHelper.paginated(response_data, paginated_data.total_data, paginated_data.page, paginated_data.size, message));
    };
    res.error = (message, statusCode = 400) => {
        return res.status(statusCode).json(response_helper_1.ResponseHelper.error(message));
    };
    next();
};
exports.responseEnhancer = responseEnhancer;
//# sourceMappingURL=response-enhance.js.map