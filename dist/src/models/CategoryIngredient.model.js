"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CateIngredientSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
});
const CateIngredients = mongoose_1.default.model('cate-ingredients', CateIngredientSchema);
exports.default = CateIngredients;
