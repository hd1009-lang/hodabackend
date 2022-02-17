"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Ingredient_controller_1 = __importDefault(require("../controllers/Ingredient.controller"));
const HandleError_1 = require("../utils/HandleError");
const router = express_1.default.Router();
router.get('/ingredient', (0, HandleError_1.asyncMiddle)(Ingredient_controller_1.default.getIngredient));
router.get('/cate-ingredient', (0, HandleError_1.asyncMiddle)(Ingredient_controller_1.default.getCateIngredient));
exports.default = router;
