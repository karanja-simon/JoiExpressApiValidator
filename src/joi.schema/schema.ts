import Joi from 'joi';

export const schemas = {
    user: {
        email: Joi.string().required(),
        username: Joi.string().required(),
        registrationNo: Joi.string().regex(/^[A-Z]{3}-[0-9]{4}-[0-9]{4}$/).required()
    },
    userDetail: {
        id: Joi.number().min(1).required()
    }
};