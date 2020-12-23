import Koa from 'koa';
import router from 'koa-joi-router';
import logger from 'koa-logger';
import { Model } from 'objection';
import Knex from 'knex';
import knexConfig from '../knexfile';
import registerAuth from './auth';
import { PORT } from './config';

const app = new Koa();
const auth = router();
const knex = Knex(knexConfig.development);

registerAuth(auth);

Model.knex(knex);

app.use(logger());
app.use(auth.middleware());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
