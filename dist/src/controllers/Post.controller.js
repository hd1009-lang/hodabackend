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
const Post_service_1 = __importDefault(require("../services/Post.service"));
const PostController = {
    createPost: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const content = Object.assign(Object.assign({}, req.body), { idUser: req.user });
        const result = yield Post_service_1.default.createPost(content);
        return res.status(HandleError_1.HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    }),
    getPost: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const result = yield Post_service_1.default.getPost(id);
        return res.status(HandleError_1.HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    }),
};
exports.default = PostController;
