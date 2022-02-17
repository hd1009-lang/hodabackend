import mongoose from 'mongoose';
export interface IUserModel extends mongoose.Document {
    username: string;
    name: string;
    bmiId: string;
    password: string;
    active: boolean;
    role: string;
    post: [];
}
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            trim: true,
            required: true,
        },
        bmiId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'bmis',
        },
        post: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'posts',
            },
        ],
        active: {
            type: Boolean,
            default: true,
        },
        role: {
            type: String,
            default: 'user',
        },
    },
    {
        timestamps: true,
    }
);
const Users = mongoose.model<IUserModel>('users', UserSchema);
export default Users;
