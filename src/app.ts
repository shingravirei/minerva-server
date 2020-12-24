import Koa from 'koa';
import router from 'koa-joi-router';
import logger from 'koa-logger';
import { Model } from 'objection';
import Knex from 'knex';
import ErrorHandler from './middleware/errorHandler';
import registerUser from './routes/user';
import { NODE_ENV, knexConfig } from './config';

const app = new Koa();
const r = router();
const knex = Knex(knexConfig());

// Registering the routes
registerUser(r);

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
