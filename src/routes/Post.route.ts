import express from 'express';
import PostController from '../controllers/Post.controller';
import { AuthenticateToken } from '../middlewares/authAction';
import { asyncMiddle } from '../utils/HandleError';

const router = express.Router();

router.post('/create', AuthenticateToken, asyncMiddle(PostController.createPost));
router.get('/:id', asyncMiddle(PostController.getPost));
export default router;
