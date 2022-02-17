"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HandleError_1 = require("./utils/HandleError");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const Swagger_1 = __importDefault(require("../docs/Swagger"));
(0, db_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ credentials: true, origin: true }));
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', (req, res) => {
    return res.redirect('/docs');
});
var cssOptions = {
    customCssUrl: '/custom.css',
    customSiteTitle: 'Poopcode APIs',
    customfavIcon: '/clipboard.ico',
};
app.use('/api', routes_1.default);
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(Swagger_1.default, cssOptions));
app.use(HandleError_1.handleErrorMessage);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
