import { Request, Response } from 'express';
import { HttpStatusCode } from './../utils/HandleError';
import IngredientService from '../services/Ingredient.service';

const IngredientController = {
    getIngredient: async (req: Request, res: Response) => {
        const result = await IngredientService.getIngredient();
        return res.status(HttpStatusCode.OK).json({ data: result });
    },
    getCateIngredient:async(req:Request,res:Response)=>{
      const result = await IngredientService.getCateIngredient();
      return res.status(HttpStatusCode.OK).json({ data: result });
    }
};

export default IngredientController;
