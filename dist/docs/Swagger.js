"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cates_swagger_1 = __importDefault(require("./Cates.swagger"));
const Ingredient_swagger_1 = __importDefault(require("./Ingredient.swagger"));
const Model_swagger_1 = __importDefault(require("./Model.swagger"));
const Post_swagger_1 = __importDefault(require("./Post.swagger"));
const Users_swagger_1 = __importDefault(require("./Users.swagger"));
const Swagger = {
    swagger: '2.0',
    info: {
        description: 'Swagger of hodathefood',
        version: '1.0.0',
        title: 'Swagger hodathefood',
    },
    tags: [
        {
            name: 'Auth',
            description: 'Auth web',
        },
        {
            name: 'User',
            description: 'Info User (BMI, info)',
        },
        {
            name: 'Category',
            description: 'Category Post, Food, etc',
        },
        {
            name: 'Ingredients',
            description: 'Ingredient of the food',
        },
    ],
    schemes: ['http', 'https'],
    paths: Object.assign(Object.assign(Object.assign(Object.assign({}, Users_swagger_1.default), Cates_swagger_1.default), Ingredient_swagger_1.default), Post_swagger_1.default),
    definitions: Object.assign({}, Model_swagger_1.default),
    securityDefinitions: {
        token: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        },
    },
    externalDocs: {
        description: 'Used with Swagger. Click to find out more about Swagger ',
        url: 'http://swagger.io',
    },
};
exports.default = Swagger;
