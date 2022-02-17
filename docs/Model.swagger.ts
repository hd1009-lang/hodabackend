const Auth = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
    },
};
const ApiResponse = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
        },
    },
};
const Post = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
        },
        idCate: {
            type: 'string',
        },
        ingredient: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        data: {
            type: 'object',
        },
    },
};
const Register = {
    type: 'object',
    required: ['username', 'password', 'name'],
    properties: {
        username: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
    },
};
const BMI = {
    type: 'object',
    required: ['height', 'weight', 'gender', 'yearOfBirth', 'activity'],
    properties: {
        height: {
            type: 'number',
        },
        weight: {
            type: 'number',
        },
        gender: {
            type: 'number',
        },
        yearOfBirth: {
            type: 'number',
        },
        activity: {
            type: 'number',
        },
    },
};
const CategoryPost = {
    type: 'object',
    required: ['name'],
    properties: {
        name: {
            type: 'string',
        },
    },
};

const DefaultModel = {
    Auth,
    Register,
    BMI,
    CategoryPost,
    ApiResponse,
    Post,
};
export default DefaultModel;
