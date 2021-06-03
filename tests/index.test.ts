import request from 'supertest';
import Knex from 'knex';
import app from '../src/app';
import { knexConfig } from '../src/config';

const server = app.listen(3000);
const knex = Knex(knexConfig());

beforeAll(async () => {
    await knex.migrate.latest();
});

afterAll(async () => {
    server.close();

    await knex.migrate.down();
});

describe('/user', () => {
    const user = {
        username: 'test',
        email: 'test@test.com',
        password: 'some big password here',
    };

    test('it should respond with 201', async () => {
        const res = await request(server).post('/user').send(user);

        expect(res.status).toBe(201);
    });

    test('it should respond with 409', async () => {
        const res = await request(server).post('/user').send(user);

        expect(res.status).toBe(409);
    });
});
