import bcrypt from 'bcrypt';
import { Context } from 'koa';
import router, { Config } from 'koa-joi-router';
// import User from './entity/User';

const { Joi } = router;

const authRouter = router();

const userValidation: Config = {
    validate: {
        body: {
            username: Joi.string().max(30).required(),
            email: Joi.string().lowercase().email().required(),
            password: Joi.string().max(100).required(),
            repeatPassoword: Joi.ref('password'),
        },
        type: 'json',
    },
};

authRouter.post('/user', userValidation, async (ctx: Context) => {
    const { username, email, password } = ctx.request.body;

    const hash = await bcrypt.hash(password, 10);

    ctx.status = 201;

    console.log({
        username,
        email,
        password,
        hash,
    });
});
export { authRouter as default };
