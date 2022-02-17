import express from 'express';
import UserController from '../controllers/Users.controller';
import { AuthenticateToken } from '../middlewares/authAction';
import { asyncMiddle } from '../utils/HandleError';
const router = express.Router();

router.post('/login', asyncMiddle(UserController.login));
router.get('/refresh_token', asyncMiddle(UserController.getAccessToken));
router.post('/register', asyncMiddle(UserController.register));
router.post('/create-bmi', AuthenticateToken, asyncMiddle(UserController.createBMI));
router.post('/update-bmi', AuthenticateToken, asyncMiddle(UserController.updateBMI));
router.get('/bmi', AuthenticateToken, asyncMiddle(UserController.getBMI));
router.get('/info', AuthenticateToken, asyncMiddle(UserController.getInfoUser));
router.post('/habit', AuthenticateToken, asyncMiddle(UserController.addHabit));
router.get('/habit', AuthenticateToken, asyncMiddle(UserController.getHabit));
router.get('/logout', AuthenticateToken, asyncMiddle(UserController.logout));
export default router;
