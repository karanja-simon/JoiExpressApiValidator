"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.schemas = {
    user: {
        email: joi_1.default.string().required(),
        username: joi_1.default.string().required(),
        registrationNo: joi_1.default.string().regex(/^[A-Z]{3}-[0-9]{4}-[0-9]{4}$/).required()
    },
    userDetail: {
        id: joi_1.default.number().min(1).required()
    }
};
//# sourceMappingURL=schema.js.map