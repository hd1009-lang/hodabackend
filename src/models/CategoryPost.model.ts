import mongoose from 'mongoose';
import { Category } from '../Types/Post';
interface ICateModel extends Category, mongoose.Document {}

const CateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        key: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Cates = mongoose.model<ICateModel>('cates', CateSchema);
export default Cates;
