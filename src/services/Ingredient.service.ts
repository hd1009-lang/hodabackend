import { ErrorApi } from './../utils/HandleError';
import Ingredients from '../models/Ingredient.model';
import CateIngredients from '../models/CategoryIngredient.model';

const IngredientService = {
    getIngredient: async () => {
        try {
            const ingredients = await Ingredients.find({}).populate('idCate', '');
            return ingredients;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getCateIngredient:async()=>{
      try {
        const cates = await CateIngredients.find({})
        return cates
      } catch (error) {
        throw ErrorApi.BadRequest((error as Error).message);
      }
    }
};

export default IngredientService;
