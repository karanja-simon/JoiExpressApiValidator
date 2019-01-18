"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(_dao) {
        this.dao = _dao;
    }
    register(req, res) {
        const user = req.body;
        console.log(user);
        this.dao.addUser(user).then((results) => {
            res.json({ data: `User registered successfully!` });
        }).catch((err) => {
            res.json({ data: `Error registering user ${err}` });
        });
    }
    user(req, res) {
        const id = req.params['id'];
        this.dao.getUser(id).then((results) => {
            res.json({ data: results });
        }).catch((err) => {
            res.json({ data: `Error registering user with id: ${id}` });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map