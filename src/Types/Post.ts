export interface Category {
    name: string;
    key?: string;
}

export interface PostModel {
    _id: string;
    title: string;
    idCate: string;
    idUser: string;
    ingredient: string[];
    data: {
        ops: [];
    };
}
