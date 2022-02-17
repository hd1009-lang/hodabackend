"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HandleError_1 = require("./../utils/HandleError");
const Ingredient_model_1 = __importDefault(require("../models/Ingredient.model"));
const CategoryIngredient_model_1 = __importDefault(require("../models/CategoryIngredient.model"));
const IngredientService = {
    getIngredient: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const ingredients = yield Ingredient_model_1.default.find({}).populate('idCate', '');
            return ingredients;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
    getCateIngredient: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const cates = yield CategoryIngredient_model_1.default.find({});
            return cates;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    })
};
exports.default = IngredientService;
