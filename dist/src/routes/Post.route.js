"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Post_controller_1 = __importDefault(require("../controllers/Post.controller"));
const authAction_1 = require("../middlewares/authAction");
const HandleError_1 = require("../utils/HandleError");
const router = express_1.default.Router();
router.post('/create', authAction_1.AuthenticateToken, (0, HandleError_1.asyncMiddle)(Post_controller_1.default.createPost));
router.get('/:id', (0, HandleError_1.asyncMiddle)(Post_controller_1.default.getPost));
exports.default = router;
