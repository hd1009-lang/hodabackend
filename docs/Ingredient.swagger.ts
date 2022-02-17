const IngredientSwagger = {
    '/api/ingredients/ingredient': {
        get: {
            tags: ['Ingredients'],
            summary: 'GET List Ingredient',
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
    '/api/ingredients/cate-ingredient': {
        get: {
            tags: ['Ingredients'],
            summary: 'GET List Cate Ingredient',
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

export default IngredientSwagger;
