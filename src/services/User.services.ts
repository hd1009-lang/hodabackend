import { ErrorApi } from './../utils/HandleError';
import { BMIModel, User } from './../Types/User';
import { UserRegister } from '../Types/User';
import { HabitWaterRequest, HabitWater, Habit } from '../Types/HabitWater';
import BMIs from '../models/BMI.model';
import Users from '../models/User.model';
import Token from '../utils/token';
import jwt from 'jsonwebtoken';
import HabitWaters from '../models/HabitWater.model';
const UserServices = {
    RegisterUser: async (body: UserRegister, id: string) => {
        const currentYear = new Date().getFullYear();
        try {
            const user = await Users.findOne({ username: body.username });
            if (user) {
                throw new Error('Tồn tại user');
            }
            const newUser = new Users({
                ...body,
            });
            const data = await newUser.save();
            const initialData = [{ _id: id, date: id }];
            await HabitWaters.create({ _id: data.username + id, idUser: data._id, data: initialData, year: currentYear });
            return data;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    LoginUser: async (content: User) => {
        try {
            const user = await Users.findOne({ username: content.username }).populate('bmiId', '');
            if (!user || user.password !== content.password) {
                throw new Error('Vui lòng kiểm tra tài khoản hoặc mật khẩu');
            }
            const payload = {
                id: user!._id,
                name: user!.username,
            };
            const refreshToken = Token.createRefreshToken(payload);

            const userResult = {
                username: user.username,
                name: user.name,
                post: user.post,
                bmiId: user.bmiId,
            };
            return { user: userResult, refreshToken };
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getAccessToken: (rf_token: string) => {
        try {
            const token = jwt.verify(rf_token, process.env.REFRESH__TOKEN as string, (err, user: any) => {
                if (err) throw new Error('Vui lòng đăng nhập lại');

                const accessToken = Token.createAccessToken({ id: user.id, name: user.name });
                return accessToken;
            });
            return token;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    createBMIs: async (body: BMIModel) => {
        try {
            const { gender, height, weight, yearOfBirth } = body;
            const user = await Users.findOne({ _id: body.idUser });
            if (!user) throw new Error('Không tồn tại user');
            // const bmi = CalculateBmi(gender!, weight!, height!, yearOfBirth!);
            const newBMI = new BMIs({
                ...body,
                // bmi,
            });
            const resultBMI = await newBMI.save();
            await user.updateOne({ bmiId: resultBMI.id });
            return resultBMI;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    updateBMIs: async (body: BMIModel) => {
        try {
            const { gender, height, weight, yearOfBirth } = body;
            const bmi = await BMIs.findOne({ idUser: body.idUser });
            if (!bmi) throw new Error('Không tồn tại');
            const newBMI = CalculateBmi(
                gender || bmi.gender!,
                weight || bmi.weight!,
                height || bmi.height!,
                yearOfBirth || bmi.yearOfBirth!
            );

            await bmi.updateOne({
                idUser: body.idUser,
                weight: body.weight || bmi.weight,
                height: body.height || bmi.height,
                gender: body.gender || bmi.gender,
                yearOfBirth: body.yearOfBirth || bmi.yearOfBirth,
                activity: body.activity || bmi.activity,
                bmi: newBMI,
            });
            return bmi;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getBMI: async (idUser: string) => {
        try {
            const bmi = await BMIs.findOne({ idUser: idUser });
            if (!bmi) throw new Error('Vui lòng kiểm tra lại');
            return bmi;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getInfoUser: async (idUser: string) => {
        try {
            const user = await Users.findOne({ _id: idUser }).populate('bmiId', '-_id -idUser');
            if (!user) throw new Error('Vui lòng kiểm tra lại');
            return user;
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    addHabit: async (idUser: string, content: Habit, id: string) => {
        try {
            const { process, water } = content;
            const currentYear = new Date().getFullYear();
            const user = await Users.findById(idUser);
            if (!user) throw new Error('User không tồn tại');
            const habit = await HabitWaters.findOne({ idUser: idUser, year: currentYear });
            if (habit) {
                const currentDate = habit.data[habit.data.length - 1];
                if (currentDate.date === id) {
                    if (process) {
                        habit.data[habit.data.length - 1].process = process!;
                        habit.data[habit.data.length - 1].water! += water!;
                    } else {
                        habit.data[habit.data.length - 1].water! += water!;
                    }
                    const resultUpdate = await habit.save();
                    return resultUpdate;
                }
                const initialData = { _id: id, date: id, water: water! };
                habit.data.push(initialData);
                const newHabit = await habit.save();
                return newHabit;
            } else {
                const initialData = [{ _id: id, date: id, water: water! }];
                const result = await HabitWaters.create({ _id: user.username + id, idUser: idUser, data: initialData, year: currentYear });
                return result;
            }
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
    getHabit: async (idUser: string) => {
        try {
            const currentYear = new Date().getFullYear();
            const habit = await HabitWaters.findOne({ idUser: idUser, year: currentYear });
            if (habit) return habit;
            throw new Error('Không tìm thấy');
        } catch (error) {
            throw ErrorApi.BadRequest((error as Error).message);
        }
    },
};

export default UserServices;

const CalculateBmi = (gender: number, weight: number, height: number, yearOfBirth: number) => {
    const date = new Date();
    const age = date.getFullYear() - yearOfBirth;
    if (gender === 0) return 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
    return 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
};
