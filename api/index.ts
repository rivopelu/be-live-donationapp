import { logger } from '../src/utils/logger';
import app from './app';
import {ENV} from "../src/constants/env,";

app.listen(ENV.PORT, () => {
    logger.info(`RUNNING ON PORT [${ENV.PORT}] --- ENV : ${ENV.NODE_ENV} `);
});
