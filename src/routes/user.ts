import bcrypt from 'bcrypt';
import { Context } from 'koa';
import { Config, Router } from 'koa-joi-router';
import { Joi } from '../config';
import User from '../Models/User';

export default (router: Router) => {
    const userValidation: Config = {
        validate: {
            body: {
                username: Joi.string().max(30).required(),
                email: Joi.string().lowercase().email().required(),
                password: Joi.string().max(100).required(),
            },
            type: 'json',
        },
    };

    router.post('/user', userValidation, async (ctx: Context) => {
        const { username, email, password } = ctx.request.body;

        const hash = await bcrypt.hash(password, 10);

        await User.query().insert({ username, email, hash });

        ctx.status = 201;
    });
};
