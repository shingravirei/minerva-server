import { Context } from 'koa';
import { Config, Router } from 'koa-joi-router';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Joi, secret } from '../config';
import User from '../Models/User';

export default (router: Router) => {
    const loginValidation: Config = {
        validate: {
            body: {
                email: Joi.string().lowercase().email().required(),
                password: Joi.string().max(100).required(),
            },
            type: 'json',
        },
    };

    router.post('/login', loginValidation, async (ctx: Context) => {
        const { email, password } = ctx.request.body;

        const user = await User.query().findOne({ email });

        if (!user) {
            ctx.status = 404;
            return;
        }

        const passwordMatch = await bcrypt.compare(password, user.hash);

        if (passwordMatch) {
            const token = jwt.sign(
                { id: user.id, username: user.username },
                secret,
            );

            ctx.body = { token };

            return;
        }

        ctx.status = 401;
    });
};
