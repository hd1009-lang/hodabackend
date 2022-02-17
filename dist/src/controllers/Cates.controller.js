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
const validates_1 = __importDefault(require("../validates"));
const Cate_servieces_1 = __importDefault(require("../services/Cate.servieces"));
const CatesControllers = {
    createCate: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        validates_1.default.CatesValidates.CatesValidate(req.body);
        const result = yield Cate_servieces_1.default.create(req.body);
        return res.status(HandleError_1.HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    }),
};
exports.default = CatesControllers;
