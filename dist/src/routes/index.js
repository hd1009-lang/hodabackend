"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Users_route_1 = __importDefault(require("./Users.route"));
const Cates_route_1 = __importDefault(require("./Cates.route"));
const Ingrdient_route_1 = __importDefault(require("./Ingrdient.route"));
const Post_route_1 = __importDefault(require("./Post.route"));
const router = express_1.default.Router();
const pathRouter = [
    {
        path: '/users',
        route: Users_route_1.default,
    },
    {
        path: '/cates',
        route: Cates_route_1.default,
    },
    {
        path: '/ingredients',
        route: Ingrdient_route_1.default,
    },
    {
        path: '/posts',
        route: Post_route_1.default,
    },
];
pathRouter.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
