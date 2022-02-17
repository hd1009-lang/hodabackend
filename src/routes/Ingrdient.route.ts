import express from 'express';
import IngredientController from '../controllers/Ingredient.controller';
import { asyncMiddle } from '../utils/HandleError';

const router = express.Router();

router.get('/ingredient', asyncMiddle(IngredientController.getIngredient));
router.get('/cate-ingredient', asyncMiddle(IngredientController.getCateIngredient));

export default router;
