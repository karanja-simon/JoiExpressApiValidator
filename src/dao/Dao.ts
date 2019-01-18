import mysql from 'mysql';
import {IUser} from '../interfaces/IUser';

const CURRENT_TIMESTAMP: any = mysql.raw('CURRENT_TIMESTAMP()');

export class Dao {

    private conn: mysql.Connection;

    constructor(conn: mysql.Connection) {
        this.conn = conn;
    }

    public addUser(user: IUser): Promise<any> {
        user.createdAt = CURRENT_TIMESTAMP;
        user.updatedAt = CURRENT_TIMESTAMP;

        console.log(user);
        return new Promise<any>((resolve, reject) => {
            this.conn.query('INSERT INTO tbl_users SET ?', user, (err, results, fields) => {
                if (err) {
                    reject({error: err.sqlMessage});
                    return;
                }
                resolve({message: 'User created', insertId: results.insertId});
            });
        });

    }



    public getUser(id: number): Promise<IUser[]> {
        return new Promise<any>((resolve, reject) => {
            this.conn.query('SELECT * FROM `tbl_users` WHERE id = ?', [id], (err, results, fields) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results);
            });
        });
    }

}
