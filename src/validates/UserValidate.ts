import { ErrorApi } from './../utils/HandleError';
import { User, UserRegister, BMIModel } from '../Types/User';
import Helper from '../utils/Regex';

export const ValidateLogin: Function = (body: User) => {
    const { username, password } = body;
    if (username.length < 5 || password!.length < 6) {
        throw ErrorApi.BadRequest('Tài khoản hoặc mật khẩu sai');
    }
    return true;
};

export const ValidateRegister: Function = (body: UserRegister) => {
    const { username, password, name } = body;
    if (username.length < 5) throw ErrorApi.BadRequest('Tài khoản phải hơn 5 kí tự');
    if (name.length < 0) throw ErrorApi.BadRequest('Tên phải từ 1 ký tự');
    if (password) {
        if (password.length < 5) throw ErrorApi.BadRequest('Mật khẩu phải dài hơn 6 ký tự');
        Helper.checkCountAtLeast(Helper.Regex.UPPERCASE, 2, password, 'Mật khẩu', 'ký tự viết hoa');
        Helper.checkCountAtLeast(Helper.Regex.NUMBER, 2, password, 'Mật khẩu', 'ký tự số');
        Helper.checkCountAtLeast(Helper.Regex.SPECIAL, 2, password, 'Mật khẩu', 'Ký tự đặc biệt');
    } else {
        throw ErrorApi.BadRequest('Gõ mật khẩu vào');
    }
    return true;
};

export const ValidateBMI: Function = (body: BMIModel) => {
    const { gender, height, weight, activity, yearOfBirth } = body;
    if (gender !== 0 && gender !== 1) throw ErrorApi.BadRequest('Giới tính Nam | Nữ');
    if (height! <= 0 && weight! <= 0) throw ErrorApi.BadRequest('Chỉ số không thích hợp');
    if (activity! <= 0) throw ErrorApi.BadRequest('Chỉ số không thích hợp');
    const date = new Date();
    if (yearOfBirth! > date.getFullYear()) throw ErrorApi.BadRequest('Năm sinh không phù hợp');
    return true;
};
export const ValidateUpdateUser: Function = (body: User) => {
    const { username, password, name } = body;
    if (username && username.length < 5) throw ErrorApi.BadRequest('Tài khoản phải hơn 5 kí tự');
    if (password && password.length < 5) throw ErrorApi.BadRequest('Mật khẩu phải dài hơn 6 ký tự');
    if (name && name.length < 0) throw ErrorApi.BadRequest('Tên phải từ 1 ký tự');
    if (password) {
        if (password.length < 5) throw ErrorApi.BadRequest('Mật khẩu phải dài hơn 6 ký tự');
        Helper.checkCountAtLeast(Helper.Regex.UPPERCASE, 2, password, 'Mật khẩu', 'ký tự viết hoa');
        Helper.checkCountAtLeast(Helper.Regex.NUMBER, 2, password, 'Mật khẩu', 'ký tự số');
        Helper.checkCountAtLeast(Helper.Regex.SPECIAL, 2, password, 'Mật khẩu', 'Ký tự đặc biệt');
    }
  
    return true;
};
const UserValidation = {
    ValidateLogin,
    ValidateRegister,
    ValidateBMI,
};
export default UserValidation;
