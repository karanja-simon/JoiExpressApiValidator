"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const config_json_1 = __importDefault(require("../config/config.json"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const Dao_1 = require("./dao/Dao");
const NoAuthRoutes_1 = require("./routes/NoAuthRoutes");
const app = express_1.default();
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan_1.default('dev'));
const con = mysql_1.default.createConnection({
    host: config_json_1.default.db_host,
    user: config_json_1.default.db_user,
    password: config_json_1.default.db_pass,
    database: config_json_1.default.db_name,
});
const dao = new Dao_1.Dao(con);
con.connect((err) => {
    if (err) {
        console.log('Error connecting: ', err.stack);
        return;
    }
    console.log('Connected as id: ', con.threadId);
});
const noAuthRoutes = new NoAuthRoutes_1.NoAuthRoutes(dao);
app.use('/joi/api/v1/', noAuthRoutes.router);
app.listen(3000, () => {
    console.log('App listening on port 3000');
});
//# sourceMappingURL=server.js.map