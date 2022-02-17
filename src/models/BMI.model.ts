import mongoose from 'mongoose';
import { BMIModel } from '../Types/User';

export interface IBMIModel extends BMIModel, mongoose.Document {}

const BMISchema = new mongoose.Schema(
    {
        idUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
        height: {
            type: Number,
            default: 1,
        },
        weight: {
            type: Number,
            default: 1,
        },
        gender: {
            type: Number,
            default: 0,
        },
        yearOfBirth: {
            type: Number,
            default: 1,
        },
        activity: {
            type: Number,
            default: 1,
        },
        bmi: {
            type: Number,
            default: 1,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const BMIs = mongoose.model<IBMIModel>('bmis', BMISchema);
export default BMIs;
