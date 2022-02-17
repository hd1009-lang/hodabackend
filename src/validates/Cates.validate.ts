import { Category } from '../Types/Post';

enum COMMAND {
    CREATED = 'CREATED',
}

const CatesValidate = (body: Category) => {
    const { name } = body;
    if (name.length < 3) {
        throw new Error('Tên không đủ độ dài, phải dài hơn 3 ký tự');
    }
};

const CatesValidates = {
    CatesValidate,
};

export default CatesValidates;
