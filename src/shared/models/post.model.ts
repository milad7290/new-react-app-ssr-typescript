import { BaseModel } from './base.model';

export interface Post extends BaseModel {
    title: string;
    body: string;
    userId: number;
}

export interface NewPost {
    title: string;
    body: string;
    userId: number;
}
