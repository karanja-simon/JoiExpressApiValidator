"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const middleware_1 = require("../joi.middleware/middleware");
const schema_1 = require("../joi.schema/schema");
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
        this.router.post('/user/register', middleware_1.validationMiddleware(schema_1.schemas.user, 'body'), (req, res) => { this.userCtlr.register(req, res); });
        this.router.get('/user/:id', middleware_1.validationMiddleware(schema_1.schemas.userDetail, 'params'), (req, res) => { this.userCtlr.user(req, res); });
    }
}
exports.NoAuthRoutes = NoAuthRoutes;
//# sourceMappingURL=NoAuthRoutes.js.map