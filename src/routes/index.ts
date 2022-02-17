import express from 'express';
import UserRouter from './Users.route';
import CateRouter from './Cates.route';
import Ingredients from './Ingrdient.route';
import Post from './Post.route';
const router = express.Router();

const pathRouter = [
    {
        path: '/users',
        route: UserRouter,
    },
    {
        path: '/cates',
        route: CateRouter,
    },
    {
        path: '/ingredients',
        route: Ingredients,
    },
    {
        path: '/posts',
        route: Post,
    },
];

pathRouter.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
