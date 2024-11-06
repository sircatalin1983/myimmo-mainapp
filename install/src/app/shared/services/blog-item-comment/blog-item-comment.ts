export interface BlogItemComment {
    id: number;
    title: string;
    comment: string;
    likes?: number;
    dislikes?: number;
    createdAt?: Date;
    updatedAt?: Date;
    idBlogItem: number;
    active: boolean;
    blogItemCommentList: [];
}
