import Router from '@koa/router';
import bcrypt from 'bcrypt';
import { Context } from 'koa';

const authRouter = new Router();

authRouter.post('/user', async (ctx: Context) => {
    const { username, password } = ctx.request.body;

    const hash = await bcrypt.hash(password, 10);

    ctx.status = 201;
    ctx.body = { username, password, hash };
});

export { authRouter as default };
