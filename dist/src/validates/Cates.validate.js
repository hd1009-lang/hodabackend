"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var COMMAND;
(function (COMMAND) {
    COMMAND["CREATED"] = "CREATED";
})(COMMAND || (COMMAND = {}));
const CatesValidate = (body) => {
    const { name } = body;
    if (name.length < 3) {
        throw new Error('Tên không đủ độ dài, phải dài hơn 3 ký tự');
    }
};
const CatesValidates = {
    CatesValidate,
};
exports.default = CatesValidates;
