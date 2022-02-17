import { CateIngredientModel } from './../Types/Ingredient';
import mongoose from 'mongoose';

type ICateIngredientModel = CateIngredientModel & mongoose.Document;

const CateIngredientSchema = new mongoose.Schema({
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

const CateIngredients = mongoose.model<ICateIngredientModel>('cate-ingredients', CateIngredientSchema);
export default CateIngredients;
