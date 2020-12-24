import { Context, Next } from 'koa';
import { UniqueViolationError } from 'objection';

export default () => async (ctx: Context, next: Next) => {
    try {
        await next();
    } catch (err) {
        if (err instanceof UniqueViolationError) {
            ctx.status = 409;
            ctx.body = { error: 'username and/or email already in use' };
        } else {
            ctx.status = err.status || 500;
            ctx.body = { error: err.message };
        }
        ctx.app.emit('error', err, ctx);
    }
};
