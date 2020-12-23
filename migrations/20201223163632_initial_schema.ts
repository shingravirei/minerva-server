import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.increments('id').primary();

        table.string('username').unique().notNullable();

        table.string('email').unique().notNullable();

        table.string('hash').notNullable();

        table.timestamps();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}
