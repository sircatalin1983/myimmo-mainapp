import { BlogItemComment } from "../blog-item-comment/blog-item-comment";
import { BlogCategory } from "../category/category";
import { User } from "../user/user";

export class Blog {
    id: number;
    name?: string;
    publishedDate: Date;
    status?: string;
    summary?: string;
    blogItemCommentList: BlogItemComment[];
    content: string;
    idBlogCategory: number;
    blogCategory?: BlogCategory;
    title: string;
    imageURL: string;
    commentsCount?: number;
    idUser?: number;
    user?:User;
    idOrganisation?: number;
    info?: string;
    active?: boolean;
    tags?: string;
    updatedDate?: string;
    views?: number;

}
