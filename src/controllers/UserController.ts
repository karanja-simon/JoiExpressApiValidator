import {Dao} from '../dao/Dao';
import {Request, Response} from 'express';
import {IUser} from '../interfaces/IUser';

class UserController {

    private readonly dao: Dao;

    constructor(_dao: Dao) {
        this.dao = _dao;
    }

    public register(req: Request, res: Response): void {
        const user:IUser = req.body;
        console.log(user);


        this.dao.addUser(user).then((results) => {
            res.json({data: `User registered successfully!`});
        }).catch((err) => {
            res.json({data: `Error registering user ${err}`});
        });
    }

    public user(req: Request, res: Response): void {
        const id: number = req.params['id'];
        this.dao.getUser(id).then((results) => {
            res.json({data: results});
        }).catch((err) => {
            res.json({data: `Error registering user with id: ${id}`});
        });
    }

}

export {UserController};