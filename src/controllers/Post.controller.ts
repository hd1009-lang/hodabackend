import { HttpStatusCode } from './../utils/HandleError';
import { Request, Response } from 'express';
import PostService from '../services/Post.service';
const PostController = {
    createPost: async (req: Request, res: Response) => {
        const content = {
            ...req.body,
            idUser: req.user,
        };
        const result = await PostService.createPost(content);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
    getPost: async (req: Request, res: Response) => {
        const id = req.params.id;
        const result = await PostService.getPost(id);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
};

export default PostController;
