import Koa from 'koa';
import logger from 'koa-logger';
import { PORT } from './config';
import authRouter from './auth';

const app = new Koa();

app.use(logger());
app.use(authRouter.middleware());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
