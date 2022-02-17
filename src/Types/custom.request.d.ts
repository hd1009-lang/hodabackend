type user = {
    id: string;
    name: string;
};
declare namespace Express {
    export interface Request {
        user?: string;
    }
}
