import { Request, Response, NextFunction } from 'express';
import Validate from '../validates';
import { HttpStatusCode, ErrorApi } from '../utils/HandleError';
import UserServices from '../services/User.services';
import Helper from '../utils/Regex';
import TheDate from '../utils/HandleDate';
import theDate from '../utils/HandleDate';
const UserController = {
    register: async (req: Request, res: Response) => {
        const { username, password } = req.body;
        const content = {
            ...req.body,
            username: Helper.removeVietnameseTones(username).split(' ').join(''),
        };
        const idHabitToday = theDate.getDate();
        Validate.UserValidation.ValidateRegister(content);
        const data = await UserServices.RegisterUser(content, idHabitToday);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Ok', data });
    },
    login: async (req: Request, res: Response) => {
        const { username, password, ...another } = req.body;
        const content = {
            username,
            password,
        };
        Validate.UserValidation.ValidateLogin(content);
        const result = await UserServices.LoginUser(content);
        res.cookie('refresh_token', result.refreshToken, {
            httpOnly: true,
            path: '/api/users/refresh_token',
            domain: '.hodathefood.vercel.app',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        });
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công', data: result.user, token: result.refreshToken });
    },
    getAccessToken: async (req: Request, res: Response) => {
        const rf_token = req.cookies.refresh_token;
        if (!rf_token) throw ErrorApi.UnAuthenticate(rf_token);
        const accessToken = UserServices.getAccessToken(rf_token);
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công', token: accessToken });
    },
    createBMI: async (req: Request, res: Response) => {
        const id = req.user;
        const content = { ...req.body, idUser: id };
        console.log(content);

        // Validate.UserValidation.ValidateBMI(content);
        const data = await UserServices.createBMIs(content);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Cập nhật BMI thành công', data });
    },
    updateBMI: async (req: Request, res: Response) => {
        const id = req.user;
        const content = { ...req.body, idUser: id };
        // Validate.UserValidation.ValidateBMI(content);
        const data = await UserServices.updateBMIs(content);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Cập nhật BMI thành công', data });
    },
    updateUser: async (req: Request, res: Response) => {},
    getBMI: async (req: Request, res: Response) => {
        const result = await UserServices.getBMI(req.user as string);
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công', data: result });
    },
    getInfoUser: async (req: Request, res: Response) => {
        const result = await UserServices.getInfoUser(req.user as string);
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công', data: result });
    },
    addHabit: async (req: Request, res: Response) => {
        const idHabitToday = TheDate.getDate();
        const idUser = req.user;
        const result = await UserServices.addHabit(idUser as string, req.body, idHabitToday);
        return res.status(200).json({ data: result });
    },
    getHabit: async (req: Request, res: Response) => {
        const result = await UserServices.getHabit(req.user as string);
        return res.status(HttpStatusCode.OK).json({ message: 'Thành công', data: result });
    },
    logout: async (req: Request, res: Response) => {
        res.clearCookie('refresh_token', { path: '/api/users/refresh_token' });
        return res.status(HttpStatusCode.OK).json({ message: 'Đã đăng xuất' });
    },
};

export default UserController;
