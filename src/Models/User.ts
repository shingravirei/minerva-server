import { Model } from 'objection';

export default class User extends Model {
    id!: number;

    username!: string;

    email!: string;

    hash!: string;

    created_at!: string;

    updated_at!: string;

    static tableName = 'users';
}
