import { ErrorApi } from './../utils/HandleError';
import Cates from '../models/CategoryPost.model';
import { Category } from '../Types/Post';
import Helper from '../utils/Regex';
const CateServices = {
    create: async (body: Category) => {
        try {
            const key = Helper.removeVietnameseTones(body.name).split(' ').join('-');
            const cate = await Cates.findOne({ key: key });
            if (cate) throw new Error('Thể loại đã tồn tại');
            const newCate = new Cates({
                ...body,
                key,
            });
            const data = await newCate.save();
            return data;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
};
export default CateServices;
