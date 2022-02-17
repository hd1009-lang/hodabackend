"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const HabitWaterSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
    },
    idUser: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'users',
    },
    year: {
        type: Number,
        required: true,
    },
    data: [
        {
            _id: String,
            process: {
                type: Boolean,
                default: false
            },
            date: String,
            water: {
                type: Number,
                default: 0,
            },
        },
    ],
});
const HabitWaters = mongoose_1.default.model('habits', HabitWaterSchema);
exports.default = HabitWaters;
