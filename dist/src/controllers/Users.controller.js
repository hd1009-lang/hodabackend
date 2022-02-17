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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validates_1 = __importDefault(require("../validates"));
const HandleError_1 = require("../utils/HandleError");
const User_services_1 = __importDefault(require("../services/User.services"));
const Regex_1 = __importDefault(require("../utils/Regex"));
const HandleDate_1 = __importDefault(require("../utils/HandleDate"));
const HandleDate_2 = __importDefault(require("../utils/HandleDate"));
const UserController = {
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { username, password } = req.body;
        const content = Object.assign(Object.assign({}, req.body), { username: Regex_1.default.removeVietnameseTones(username).split(' ').join('') });
        const idHabitToday = HandleDate_2.default.getDate();
        validates_1.default.UserValidation.ValidateRegister(content);
        const data = yield User_services_1.default.RegisterUser(content, idHabitToday);
        return res.status(HandleError_1.HttpStatusCode.CREATED).json({ message: 'Ok', data });
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const _a = req.body, { username, password } = _a, another = __rest(_a, ["username", "password"]);
        const content = {
            username,
            password,
        };
        validates_1.default.UserValidation.ValidateLogin(content);
        const result = yield User_services_1.default.LoginUser(content);
        res.cookie('refresh_token', result.refreshToken, {
            httpOnly: true,
            path: '/api/users/refresh_token',
            domain: '.hodathefood.vercel.app',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        });
        return res.status(HandleError_1.HttpStatusCode.OK).json({ message: 'Thành công', data: result.user, token: result.refreshToken });
    }),
    getAccessToken: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const rf_token = req.headers.cookie;
        console.log(rf_token);
        return res.status(HandleError_1.HttpStatusCode.OK).json({ message: 'Thành công', token: rf_token });
        // if (!rf_token) throw ErrorApi.UnAuthenticate(rf_token);
        // const accessToken = UserServices.getAccessToken(rf_token);
        // return res.status(HttpStatusCode.OK).json({ message: 'Thành công', token: accessToken });
    }),
    createBMI: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.user;
        const content = Object.assign(Object.assign({}, req.body), { idUser: id });
        console.log(content);
        // Validate.UserValidation.ValidateBMI(content);
        const data = yield User_services_1.default.createBMIs(content);
        return res.status(HandleError_1.HttpStatusCode.CREATED).json({ message: 'Cập nhật BMI thành công', data });
    }),
    updateBMI: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.user;
        const content = Object.assign(Object.assign({}, req.body), { idUser: id });
        // Validate.UserValidation.ValidateBMI(content);
        const data = yield User_services_1.default.updateBMIs(content);
        return res.status(HandleError_1.HttpStatusCode.CREATED).json({ message: 'Cập nhật BMI thành công', data });
    }),
    updateUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () { }),
    getBMI: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield User_services_1.default.getBMI(req.user);
        return res.status(HandleError_1.HttpStatusCode.OK).json({ message: 'Thành công', data: result });
    }),
    getInfoUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield User_services_1.default.getInfoUser(req.user);
        return res.status(HandleError_1.HttpStatusCode.OK).json({ message: 'Thành công', data: result });
    }),
    addHabit: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const idHabitToday = HandleDate_1.default.getDate();
        const idUser = req.user;
        const result = yield User_services_1.default.addHabit(idUser, req.body, idHabitToday);
        return res.status(200).json({ data: result });
    }),
    getHabit: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield User_services_1.default.getHabit(req.user);
        return res.status(HandleError_1.HttpStatusCode.OK).json({ message: 'Thành công', data: result });
    }),
    logout: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.clearCookie('refresh_token', { path: '/api/users/refresh_token' });
        return res.status(HandleError_1.HttpStatusCode.OK).json({ message: 'Đã đăng xuất' });
    }),
};
exports.default = UserController;
