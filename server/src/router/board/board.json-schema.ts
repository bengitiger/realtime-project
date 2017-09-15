export const idSchema = {
    description: 'rethinkDB의 키값',
    type: 'object',
    properties: {
        id: {
            description: 'id',
            type: 'string'
        },
    },
    required: ['id'],
};

export const addListSchema = {
    description: '리스트 등록시 체크',
    type: 'object',
    properties: {
        name: {
            description: 'name',
            type: 'string'
        },
        order: {
            description: '순서',
            type: 'number'
        },
        items: {
            description: '아이템',
            type: 'array'
        },
    },
    required: ['name', 'order', 'items'],
};

export const updateListSchema = {
    description: '리스트 업데이트시 체크, addList와 id를 합쳐서 쓴다.',
    properties: {...addListSchema.properties, ...idSchema.properties},
    required: [...addListSchema.required, ...idSchema.required]
};