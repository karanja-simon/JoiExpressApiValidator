import {Router} from 'express';
import {UserController} from '../controllers/UserController';
import {Dao} from '../dao/Dao';
import {validationMiddleware} from '../joi.middleware/middleware';
import {schemas} from '../joi.schema/schema';

class NoAuthRoutes {
    public router: Router;
    private userCtlr: UserController;
    private readonly dao: Dao;

    constructor(_dao: Dao) {
        this.router = Router();
        this.dao = _dao;
        this.routes();
    }

    // Authentication & Authorization NOT required for the API
    // requests below.
    // {/register} {/login}
    private routes(): void {
        this.userCtlr = new UserController(this.dao);
        this.router.post('/user/register', validationMiddleware(schemas.user, 'body'), (req, res) => {this.userCtlr.register(req, res)});
        this.router.get('/user/:id', validationMiddleware(schemas.userDetail, 'params'), (req, res) => {this.userCtlr.user(req, res)});
    }
}

export {NoAuthRoutes};