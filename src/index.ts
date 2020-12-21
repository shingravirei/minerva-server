import Koa, { Context } from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

const PORT = 3000;
const app = new Koa();
const router = new Router();

router.get('/', (ctx: Context) => {
    ctx.body = { hello: 'world' };
});

app.use(logger());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
