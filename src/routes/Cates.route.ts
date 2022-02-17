import express from 'express';
import CatesControllers from '../controllers/Cates.controller';
import { asyncMiddle } from '../utils/HandleError';
const router = express.Router();
router.post('/create-p', asyncMiddle(CatesControllers.createCate));

export default router;
