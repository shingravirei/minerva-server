import router from 'koa-joi-router';

require('dotenv').config();
const knexConfigFile = require('../knexfile');

export const { Joi } = router;
const { PORT, SECRET, NODE_ENV } = process.env;
const secret: string = SECRET || 'secret';

export const knexConfig = (): Object => {
    if (NODE_ENV === 'development') return knexConfigFile.development;
    if (NODE_ENV === 'test') return knexConfigFile.test;
    return knexConfigFile.production;
};

export { PORT, secret, NODE_ENV };
