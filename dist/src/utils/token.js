"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const handleToken = {
    createRefreshToken: (payload) => {
        return jsonwebtoken_1.default.sign(payload, process.env.REFRESH__TOKEN, { expiresIn: '7d' });
    },
    createAccessToken: (payload) => {
        return jsonwebtoken_1.default.sign(payload, process.env.ACCESS__TOKEN, { expiresIn: '1d' });
    },
};
exports.default = handleToken;
