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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorMessage = exports.asyncMiddle = exports.ErrorApi = exports.HttpStatusCode = void 0;
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["UN_AUTHENTICATE"] = 401] = "UN_AUTHENTICATE";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
class ErrorApi extends Error {
    constructor(code, mess) {
        super();
        this.mess = mess;
        this.code = code;
    }
    static BadRequest(mess) {
        return new ErrorApi(HttpStatusCode.BAD_REQUEST, mess);
    }
    static UnAuthenticate(mess) {
        return new ErrorApi(HttpStatusCode.UN_AUTHENTICATE, mess);
    }
}
exports.ErrorApi = ErrorApi;
const asyncMiddle = (fn) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield fn(req, res, next);
        }
        catch (error) {
            next(error);
        }
    });
};
exports.asyncMiddle = asyncMiddle;
const handleErrorMessage = (err, req, res, next) => {
    console.log('check ne', err);
    if (err instanceof ErrorApi) {
        return res.status(err.code).json({ message: err.mess });
    }
    return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Something wrong' });
};
exports.handleErrorMessage = handleErrorMessage;
