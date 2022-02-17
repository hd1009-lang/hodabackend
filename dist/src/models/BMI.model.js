"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BMISchema = new mongoose_1.default.Schema({
    idUser: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
const BMIs = mongoose_1.default.model('bmis', BMISchema);
exports.default = BMIs;
