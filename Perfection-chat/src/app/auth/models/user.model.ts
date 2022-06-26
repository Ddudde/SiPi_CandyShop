import { Post } from "src/app/home/models/Post";

export type Role = 'admin' | 'headmaster' | 'user';

export interface User {
    id?: number;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    email?: string;
    role?: Role;
    posts?: Post[]
}