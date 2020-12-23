import { Context, Next } from 'koa';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

const entityManagerMiddleware = () => async (ctx: Context, next: Next) => {
    const manager = await (await createConnection()).manager;

    ctx.entityManager = manager;

    await next();
};

export { entityManagerMiddleware as default };
