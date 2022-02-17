import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
type user = {
    id: string;
    name: string;
};
export const AuthenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    if (!token) return res.status(400).json({ msg: 'Vui lòng đăng nhập' });
    jwt.verify(token, process.env.ACCESS__TOKEN as string, (err, user: any) => {
        if (err) return res.status(400).json({ msg: 'Vui lòng đăng nhập' });
        req.user = user.id;
    });
    next();
};
