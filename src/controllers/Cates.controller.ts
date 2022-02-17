import { HttpStatusCode, ErrorApi, asyncMiddle } from './../utils/HandleError';
import { Request, Response, NextFunction } from 'express';
import Validation from '../validates';
import CateServices from '../services/Cate.servieces';
const CatesControllers = {
    createCate: async (req: Request, res: Response) => {
        Validation.CatesValidates.CatesValidate(req.body);
        const result = await CateServices.create(req.body);
        return res.status(HttpStatusCode.CREATED).json({ message: 'Thành công', data: result });
    },
};
export default CatesControllers;
