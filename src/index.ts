import Koa from 'koa';
import logger from 'koa-logger';
import authRouter from './auth';
// import entityManagerMiddleware from './db';
import { PORT } from './config';

const app = new Koa();

app.use(logger());
// app.use(entityManagerMiddleware());
app.use(authRouter.middleware());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
