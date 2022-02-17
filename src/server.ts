import { handleErrorMessage } from './utils/HandleError';
import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import routes from './routes';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../docs/Swagger';

connectDB();

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    return res.redirect('/docs');
});

var cssOptions = {
    customCssUrl: '/custom.css',
    customSiteTitle: 'Poopcode APIs',
    customfavIcon: '/clipboard.ico',
};

app.use('/api', routes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument, cssOptions));

app.use(handleErrorMessage);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
