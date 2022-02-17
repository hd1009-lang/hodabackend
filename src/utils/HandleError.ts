import { Response, Request, NextFunction } from 'express';
export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    UN_AUTHENTICATE = 401,
    INTERNAL_SERVER = 500,
}

export class ErrorApi extends Error {
    public mess: string;
    public code: number;
    constructor(code: number, mess: string) {
        super();
        this.mess = mess;
        this.code = code;
    }
    static BadRequest(mess: string) {
        return new ErrorApi(HttpStatusCode.BAD_REQUEST, mess);
    }
    static UnAuthenticate(mess: string) {
        return new ErrorApi(HttpStatusCode.UN_AUTHENTICATE, mess);
    }
}

export const asyncMiddle = (fn: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

export const handleErrorMessage = (err: ErrorApi, req: Request, res: Response, next: NextFunction) => {
    console.log('check ne', err);
    if (err instanceof ErrorApi) {
        return res.status(err.code).json({ message: err.mess });
    }
    return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'Something wrong' });
};
