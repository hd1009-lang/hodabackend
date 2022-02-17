"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostSwagger = {
    '/api/posts/create': {
        post: {
            tags: ['Posts'],
            summary: 'Create posts',
            description: '',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Create category',
                    required: true,
                    schema: {
                        $ref: '#/definitions/Post',
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
    '/api/posts/{id}': {
        get: {
            tags: ['Posts'],
            summary: 'Get posts',
            description: '',
            produces: ['application/json'],
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    description: 'ID of post',
                    required: true,
                    type: 'string',
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
};
exports.default = PostSwagger;
