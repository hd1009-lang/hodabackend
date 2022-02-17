"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'bmis',
    },
    post: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
const Users = mongoose_1.default.model('users', UserSchema);
exports.default = Users;
