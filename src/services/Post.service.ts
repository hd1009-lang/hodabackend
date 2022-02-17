import Cates from '../models/CategoryPost.model';
import Post from '../models/Post.model';
import Users from '../models/User.model';
import theDate from '../utils/HandleDate';
import Helper from '../utils/Regex';
import { PostModel } from './../Types/Post';
import { ErrorApi } from './../utils/HandleError';

const PostService = {
    createPost: async (content: PostModel) => {
        try {
            const user = await Users.findById(content.idUser);
            if (!user) throw new Error('User không tồn tại');
            const catePost = await Cates.findById(content.idCate);
            if (!catePost) throw new Error('Thể loại không tồn tại');
            const id =
                Math.floor(1000 + Math.random() * 9000) +
                Helper.removeVietnameseTones(content.title).split(' ').join('') +
                theDate.getTime();
            const newPost = await Post.create({ ...content, _id: id });
            return newPost;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getPost: async (id: string) => {
        try {
            const detailPost = await Post.findById(id).populate('idUser ingredient', '');
            return detailPost;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
};

export default PostService;
