import jwt from 'jsonwebtoken';
interface Payload {
    name: string;
    id: string;
}
const handleToken = {
    createRefreshToken: (payload: Payload) => {
        return jwt.sign(payload, process.env.REFRESH__TOKEN as string, { expiresIn: '7d' });
    },
    createAccessToken: (payload: Payload) => {
        return jwt.sign(payload, process.env.ACCESS__TOKEN as string, { expiresIn: '1d' });
    },
};

export default handleToken;
