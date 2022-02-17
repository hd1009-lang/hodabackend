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
const HandleError_1 = require("./../utils/HandleError");
const BMI_model_1 = __importDefault(require("../models/BMI.model"));
const User_model_1 = __importDefault(require("../models/User.model"));
const token_1 = __importDefault(require("../utils/token"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const HabitWater_model_1 = __importDefault(require("../models/HabitWater.model"));
const UserServices = {
    RegisterUser: (body, id) => __awaiter(void 0, void 0, void 0, function* () {
        const currentYear = new Date().getFullYear();
        try {
            const user = yield User_model_1.default.findOne({ username: body.username });
            if (user) {
                throw new Error('Tồn tại user');
            }
            const newUser = new User_model_1.default(Object.assign({}, body));
            const data = yield newUser.save();
            const initialData = [{ _id: id, date: id }];
            yield HabitWater_model_1.default.create({ _id: data.username + id, idUser: data._id, data: initialData, year: currentYear });
            return data;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
    LoginUser: (content) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_model_1.default.findOne({ username: content.username }).populate('bmiId', '');
            if (!user || user.password !== content.password) {
                throw new Error('Vui lòng kiểm tra tài khoản hoặc mật khẩu');
            }
            const payload = {
                id: user._id,
                name: user.username,
            };
            const refreshToken = token_1.default.createRefreshToken(payload);
            const userResult = {
                username: user.username,
                name: user.name,
                post: user.post,
                bmiId: user.bmiId,
            };
            return { user: userResult, refreshToken };
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
    getAccessToken: (rf_token) => {
        try {
            const token = jsonwebtoken_1.default.verify(rf_token, process.env.REFRESH__TOKEN, (err, user) => {
                if (err)
                    throw new Error('Vui lòng đăng nhập lại');
                const accessToken = token_1.default.createAccessToken({ id: user.id, name: user.name });
                return accessToken;
            });
            return token;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    },
    createBMIs: (body) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { gender, height, weight, yearOfBirth } = body;
            const user = yield User_model_1.default.findOne({ _id: body.idUser });
            if (!user)
                throw new Error('Không tồn tại user');
            // const bmi = CalculateBmi(gender!, weight!, height!, yearOfBirth!);
            const newBMI = new BMI_model_1.default(Object.assign({}, body));
            const resultBMI = yield newBMI.save();
            yield user.updateOne({ bmiId: resultBMI.id });
            return resultBMI;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
    updateBMIs: (body) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { gender, height, weight, yearOfBirth } = body;
            const bmi = yield BMI_model_1.default.findOne({ idUser: body.idUser });
            if (!bmi)
                throw new Error('Không tồn tại');
            const newBMI = CalculateBmi(gender || bmi.gender, weight || bmi.weight, height || bmi.height, yearOfBirth || bmi.yearOfBirth);
            yield bmi.updateOne({
                idUser: body.idUser,
                weight: body.weight || bmi.weight,
                height: body.height || bmi.height,
                gender: body.gender || bmi.gender,
                yearOfBirth: body.yearOfBirth || bmi.yearOfBirth,
                activity: body.activity || bmi.activity,
                bmi: newBMI,
            });
            return bmi;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
    getBMI: (idUser) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const bmi = yield BMI_model_1.default.findOne({ idUser: idUser });
            if (!bmi)
                throw new Error('Vui lòng kiểm tra lại');
            return bmi;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
    getInfoUser: (idUser) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_model_1.default.findOne({ _id: idUser }).populate('bmiId', '-_id -idUser');
            if (!user)
                throw new Error('Vui lòng kiểm tra lại');
            return user;
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
    addHabit: (idUser, content, id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { process, water } = content;
            const currentYear = new Date().getFullYear();
            const user = yield User_model_1.default.findById(idUser);
            if (!user)
                throw new Error('User không tồn tại');
            const habit = yield HabitWater_model_1.default.findOne({ idUser: idUser, year: currentYear });
            if (habit) {
                const currentDate = habit.data[habit.data.length - 1];
                if (currentDate.date === id) {
                    if (process) {
                        habit.data[habit.data.length - 1].process = process;
                        habit.data[habit.data.length - 1].water += water;
                    }
                    else {
                        habit.data[habit.data.length - 1].water += water;
                    }
                    const resultUpdate = yield habit.save();
                    return resultUpdate;
                }
                const initialData = { _id: id, date: id, water: water };
                habit.data.push(initialData);
                const newHabit = yield habit.save();
                return newHabit;
            }
            else {
                const initialData = [{ _id: id, date: id, water: water }];
                const result = yield HabitWater_model_1.default.create({ _id: user.username + id, idUser: idUser, data: initialData, year: currentYear });
                return result;
            }
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
    getHabit: (idUser) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const currentYear = new Date().getFullYear();
            const habit = yield HabitWater_model_1.default.findOne({ idUser: idUser, year: currentYear });
            if (habit)
                return habit;
            throw new Error('Không tìm thấy');
        }
        catch (error) {
            throw HandleError_1.ErrorApi.BadRequest(error.message);
        }
    }),
};
exports.default = UserServices;
const CalculateBmi = (gender, weight, height, yearOfBirth) => {
    const date = new Date();
    const age = date.getFullYear() - yearOfBirth;
    if (gender === 0)
        return 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
    return 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
};
