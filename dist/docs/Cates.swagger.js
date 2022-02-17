"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CatesSwagger = {
    '/api/cates/create-p': {
        post: {
            tags: ['Category'],
            summary: 'Create category of post',
            description: '',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Create category',
                    required: true,
                    schema: {
                        $ref: '#/definitions/CategoryPost',
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
};
exports.default = CatesSwagger;
