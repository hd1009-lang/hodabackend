"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserSwagger = {
    '/api/users/login': {
        post: {
            tags: ['Auth'],
            summary: 'Login',
            description: '',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Login',
                    required: true,
                    schema: {
                        $ref: '#/definitions/Auth',
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
        },
    },
    '/api/users/refresh_token': {
        post: {
            tags: ['Auth'],
            summary: 'Refresh_token',
            description: '',
            produces: ['application/json'],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
        },
    },
    '/api/users/register': {
        post: {
            tags: ['Auth'],
            summary: 'Register',
            description: '',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Register',
                    required: true,
                    schema: {
                        $ref: '#/definitions/Register',
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
        },
    },
    '/api/users/create-bmi': {
        post: {
            tags: ['User'],
            summary: 'Create BMI',
            description: '',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Create BMI',
                    required: true,
                    schema: {
                        $ref: '#/definitions/BMI',
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
            security: [
                {
                    token: [],
                },
            ],
        },
    },
    '/api/users/update-bmi': {
        post: {
            tags: ['User'],
            summary: 'Update BMI',
            description: '',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Update BMI',
                    required: true,
                    schema: {
                        $ref: '#/definitions/BMI',
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
            security: [
                {
                    token: [],
                },
            ],
        },
    },
    '/api/users/bmi': {
        get: {
            tags: ['User'],
            summary: 'GET BMI',
            description: '',
            produces: ['application/json'],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
            security: [
                {
                    token: [],
                },
            ],
        },
    },
    '/api/users/info': {
        get: {
            tags: ['User'],
            summary: 'GET INFO',
            description: '',
            produces: ['application/json'],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
            security: [
                {
                    token: [],
                },
            ],
        },
    },
};
exports.default = UserSwagger;
