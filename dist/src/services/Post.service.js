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
const CategoryPost_model_1 = __importDefault(require("../models/CategoryPost.model"));
const Post_model_1 = __importDefault(require("../models/Post.model"));
const User_model_1 = __importDefault(require("../models/User.model"));
const HandleDate_1 = __importDefault(require("../utils/HandleDate"));
const Regex_1 = __importDefault(require("../utils/Regex"));
const HandleError_1 = require("./../utils/HandleError");
const PostService = {
    createPost: (content) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_model_1.default.findById(content.idUser);
            if (!user)
                throw new Error('User không tồn tại');
            const catePost = yield CategoryPost_model_1.default.findById(content.idCate);
            if (!catePost)
                throw new Error('Thể loại không tồn tại');
            const id = Math.floor(1000 + Math.random() * 9000) +
                Regex_1.default.removeVietnameseTones(content.title).split(' ').join('') +
                HandleDate_1.default.getTime();
            const newPost = yield Post_model_1.default.create(Object.assign(Object.assign({}, content), { _id: id }));
            return newPost;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
    getPost: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const detailPost = yield Post_model_1.default.findById(id).populate('idUser ingredient', '');
            return detailPost;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
};
exports.default = PostService;
