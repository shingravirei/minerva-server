import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import { PORT } from './config';
import authRouter from './auth';

const app = new Koa();

app.use(logger());
app.use(bodyParser());
app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
