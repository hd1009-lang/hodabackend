"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CateSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});
const Cates = mongoose_1.default.model('cates', CateSchema);
exports.default = Cates;
