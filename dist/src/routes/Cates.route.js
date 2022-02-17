"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Cates_controller_1 = __importDefault(require("../controllers/Cates.controller"));
const HandleError_1 = require("../utils/HandleError");
const router = express_1.default.Router();
router.post('/create-p', (0, HandleError_1.asyncMiddle)(Cates_controller_1.default.createCate));
exports.default = router;
