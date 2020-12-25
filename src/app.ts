import Koa from 'koa';
import router from 'koa-joi-router';
import logger from 'koa-logger';
import jwt from 'koa-jwt';
import { Model } from 'objection';
import Knex from 'knex';
import ErrorHandler from './middleware/errorHandler';
import registerUser from './routes/user';
import registerAuth from './routes/auth';
import { NODE_ENV, knexConfig, secret } from './config';

const app = new Koa();
const r = router();
const knex = Knex(knexConfig());

app.use(jwt({ secret }).unless({ path: ['/login', '/user'] }));

// Registering the routes
registerUser(r);
registerAuth(r);

// Binding knex instance to objection Model
Model.knex(knex);

// Rest of the middleware here
if (NODE_ENV === 'development') {
    app.use(logger());
}

app.use(ErrorHandler());
app.use(r.middleware());

app.on('error', () => {
    // for the future
});

export default app;
