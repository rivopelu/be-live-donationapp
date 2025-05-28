import { ResponseHelper } from './response-helper.js';
export function ErrorHandler(err, c) {
    c.status(err.status || 500);
    return c.json(ResponseHelper.error(err.message, err.status || 500));
}
