import { ResponseHelper } from '../utils/response-helper.js';
export class AccountController {
    async me(c) {
        const user = c.get('user');
        return c.json(ResponseHelper.data(user));
    }
}
