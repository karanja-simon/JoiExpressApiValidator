"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
class NoAuthRoutes {
    constructor(_dao) {
        this.router = express_1.Router();
        this.dao = _dao;
        this.routes();
    }
    // Authentication & Authorization NOT required for the API
    // requests below.
    // {/register} {/login}
    routes() {
        this.userCtlr = new UserController_1.UserController(this.dao);
        this.router.post('/user/register', (req, res) => { this.userCtlr.register(req, res); });
        this.router.get('/users', (req, res) => { this.userCtlr.users(req, res); });
    }
}
exports.NoAuthRoutes = NoAuthRoutes;
//# sourceMappingURL=NoAuthRoutes.js.map