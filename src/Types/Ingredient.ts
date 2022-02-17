export interface CateIngredientModel {
    _id?: string;
    name?: string;
    key?: string;
}

type nutrition = {
    calo: number;
    protein: number;
    fat: number;
    carb: number;
};
export interface IngredientModel {
    _id?: string;
    name?: string;
    idCate?: string;
    nutrition?: nutrition;
}
