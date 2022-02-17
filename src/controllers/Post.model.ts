import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        idCate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cates',
        },
        ingredient: [
            {
                type: String,
                ref: 'ingredients',
            },
        ],
        data: {
            type: Object,
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('posts', PostSchema);
export default Post;
