"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const CURRENT_TIMESTAMP = mysql_1.default.raw('CURRENT_TIMESTAMP()');
class Dao {
    constructor(conn) {
        this.conn = conn;
    }
    addUser(user) {
        user.createdAt = CURRENT_TIMESTAMP;
        user.updatedAt = CURRENT_TIMESTAMP;
        return new Promise((resolve, reject) => {
            this.conn.query('INSERT INTO tbl_users SET ?', user, (err, results, fields) => {
                if (err) {
                    reject({ error: err.sqlMessage });
                    return;
                }
                resolve({ message: 'User created', insertId: results.insertId });
            });
        });
    }
    getUsers() {
        return new Promise((resolve, reject) => {
            this.conn.query('SELECT * FROM `tbl_users`', (err, results, fields) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results);
            });
        });
    }
}
exports.Dao = Dao;
//# sourceMappingURL=Dao.js.map