"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateUpdateUser = exports.ValidateBMI = exports.ValidateRegister = exports.ValidateLogin = void 0;
const HandleError_1 = require("./../utils/HandleError");
const Regex_1 = __importDefault(require("../utils/Regex"));
const ValidateLogin = (body) => {
    const { username, password } = body;
    if (username.length < 5 || password.length < 6) {
        throw HandleError_1.ErrorApi.BadRequest('Tài khoản hoặc mật khẩu sai');
    }
    return true;
};
exports.ValidateLogin = ValidateLogin;
const ValidateRegister = (body) => {
    const { username, password, name } = body;
    if (username.length < 5)
        throw HandleError_1.ErrorApi.BadRequest('Tài khoản phải hơn 5 kí tự');
    if (name.length < 0)
        throw HandleError_1.ErrorApi.BadRequest('Tên phải từ 1 ký tự');
    if (password) {
        if (password.length < 5)
            throw HandleError_1.ErrorApi.BadRequest('Mật khẩu phải dài hơn 6 ký tự');
        Regex_1.default.checkCountAtLeast(Regex_1.default.Regex.UPPERCASE, 2, password, 'Mật khẩu', 'ký tự viết hoa');
        Regex_1.default.checkCountAtLeast(Regex_1.default.Regex.NUMBER, 2, password, 'Mật khẩu', 'ký tự số');
        Regex_1.default.checkCountAtLeast(Regex_1.default.Regex.SPECIAL, 2, password, 'Mật khẩu', 'Ký tự đặc biệt');
    }
    else {
        throw HandleError_1.ErrorApi.BadRequest('Gõ mật khẩu vào');
    }
    return true;
};
exports.ValidateRegister = ValidateRegister;
const ValidateBMI = (body) => {
    const { gender, height, weight, activity, yearOfBirth } = body;
    if (gender !== 0 && gender !== 1)
        throw HandleError_1.ErrorApi.BadRequest('Giới tính Nam | Nữ');
    if (height <= 0 && weight <= 0)
        throw HandleError_1.ErrorApi.BadRequest('Chỉ số không thích hợp');
    if (activity <= 0)
        throw HandleError_1.ErrorApi.BadRequest('Chỉ số không thích hợp');
    const date = new Date();
    if (yearOfBirth > date.getFullYear())
        throw HandleError_1.ErrorApi.BadRequest('Năm sinh không phù hợp');
    return true;
};
exports.ValidateBMI = ValidateBMI;
const ValidateUpdateUser = (body) => {
    const { username, password, name } = body;
    if (username && username.length < 5)
        throw HandleError_1.ErrorApi.BadRequest('Tài khoản phải hơn 5 kí tự');
    if (password && password.length < 5)
        throw HandleError_1.ErrorApi.BadRequest('Mật khẩu phải dài hơn 6 ký tự');
    if (name && name.length < 0)
        throw HandleError_1.ErrorApi.BadRequest('Tên phải từ 1 ký tự');
    if (password) {
        if (password.length < 5)
            throw HandleError_1.ErrorApi.BadRequest('Mật khẩu phải dài hơn 6 ký tự');
        Regex_1.default.checkCountAtLeast(Regex_1.default.Regex.UPPERCASE, 2, password, 'Mật khẩu', 'ký tự viết hoa');
        Regex_1.default.checkCountAtLeast(Regex_1.default.Regex.NUMBER, 2, password, 'Mật khẩu', 'ký tự số');
        Regex_1.default.checkCountAtLeast(Regex_1.default.Regex.SPECIAL, 2, password, 'Mật khẩu', 'Ký tự đặc biệt');
    }
    return true;
};
exports.ValidateUpdateUser = ValidateUpdateUser;
const UserValidation = {
    ValidateLogin: exports.ValidateLogin,
    ValidateRegister: exports.ValidateRegister,
    ValidateBMI: exports.ValidateBMI,
};
exports.default = UserValidation;
