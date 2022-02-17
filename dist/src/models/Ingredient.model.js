"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const IngredientSchema = new mongoose_1.default.Schema({
    _id: { type: String, required: true, trim: true },
    name: {
        type: String,
        required: true,
    },
    idCate: {
        type: String,
        ref: 'cate-ingredients',
    },
    nutrition: {
        calo: { type: Number, required: true, default: 0 },
        protein: { type: Number, required: true, default: 0 },
        fat: { type: Number, required: true, default: 0 },
        carb: { type: Number, required: true, default: 0 },
    },
});
const Ingredients = mongoose_1.default.model('ingredients', IngredientSchema);
exports.default = Ingredients;
