import router from 'koa-joi-router';

require('dotenv').config();
const knexConfigFile = require('../knexfile');

export const { Joi } = router;
export const { PORT, SECRET, NODE_ENV } = process.env;

export const knexConfig = (): Object => {
    if (NODE_ENV === 'development') return knexConfigFile.development;
    if (NODE_ENV === 'test') return knexConfigFile.test;
    return knexConfigFile.production;
};
