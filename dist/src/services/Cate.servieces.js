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
const CategoryPost_model_1 = __importDefault(require("../models/CategoryPost.model"));
const Regex_1 = __importDefault(require("../utils/Regex"));
const CateServices = {
    create: (body) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const key = Regex_1.default.removeVietnameseTones(body.name).split(' ').join('-');
            const cate = yield CategoryPost_model_1.default.findOne({ key: key });
            if (cate)
                throw new Error('Thể loại đã tồn tại');
            const newCate = new CategoryPost_model_1.default(Object.assign(Object.assign({}, body), { key }));
            const data = yield newCate.save();
            return data;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
};
exports.default = CateServices;
