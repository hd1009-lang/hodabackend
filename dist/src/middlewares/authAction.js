"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token)
        return res.status(400).json({ msg: 'Vui lòng đăng nhập' });
    jsonwebtoken_1.default.verify(token, process.env.ACCESS__TOKEN, (err, user) => {
        if (err)
            return res.status(400).json({ msg: 'Vui lòng đăng nhập' });
        req.user = user.id;
    });
    next();
};
exports.AuthenticateToken = AuthenticateToken;
