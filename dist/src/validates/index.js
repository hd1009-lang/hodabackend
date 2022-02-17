"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserValidate_1 = __importDefault(require("./UserValidate"));
const Cates_validate_1 = __importDefault(require("./Cates.validate"));
const index = {
    UserValidation: UserValidate_1.default,
    CatesValidates: Cates_validate_1.default,
};
exports.default = index;
