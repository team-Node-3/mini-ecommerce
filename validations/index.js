const Joi = require('joi');

// 마이페이지 수정
const userUpdateValidation = Joi.object({
  password: Joi.string().optional().not(''),
  phone: Joi.string().optional().not(''),
  email: Joi.string().optional().not(''),
  address: Joi.string().optional().not('')
});

module.exports = {
  userUpdateValidation
};