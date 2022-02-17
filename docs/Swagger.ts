import CatesSwagger from './Cates.swagger';
import IngredientSwagger from './Ingredient.swagger';
import DefaultModel from './Model.swagger';
import PostSwagger from './Post.swagger';
import UserSwagger from './Users.swagger';
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
    paths: {
        ...UserSwagger,
        ...CatesSwagger,
        ...IngredientSwagger,
        ...PostSwagger,
    },
    definitions: {
        ...DefaultModel,
    },
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

export default Swagger;
