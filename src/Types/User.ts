export interface User {
    username: string;
    password?: string;
    name?: string;
    post?: [];
    bmiId?: string;
    active?: boolean;
    role?: string;
}

export interface UserRegister extends User {
    name: string;
}

export interface BMIModel {
    idUser: string;
    height?: number;
    weight?: number;
    gender?: number;
    yearOfBirth?: number;
    activity?: number;
    bmi?: number;
}

export interface Role{
    name:string,
}