import router from 'koa-joi-router';

require('dotenv').config();

export const { Joi } = router;
export const { PORT, SECRET } = process.env;
