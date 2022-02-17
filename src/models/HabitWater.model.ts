import mongoose from 'mongoose';
import { HabitWater } from '../Types/HabitWater';

interface IHabitWaterModel extends HabitWater, mongoose.Document {}

const HabitWaterSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    year: {
        type: Number,
        required: true,
    },
    data: [
        {
            _id: String,
            process:{
                type:Boolean,
                default:false
            },
            date: String,
            water: {
                type: Number,
                default: 0,
            },
        },
    ],
});

const HabitWaters = mongoose.model<IHabitWaterModel>('habits', HabitWaterSchema);
export default HabitWaters;
