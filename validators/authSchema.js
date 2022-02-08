const joi = require("joi");

const authSchema = joi.object({
  name: joi.string().min(2).required(),
  role: joi.string().required(),
  email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  age: joi.number().min(10).required(),
  password: joi.string().required(),
  dateCreated: joi.date(),
  token:joi.string(),
});

module.exports = authSchema


