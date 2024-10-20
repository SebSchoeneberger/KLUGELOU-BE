import Joi from 'joi';

export const stoneValidationSchema = Joi.object({
  name: Joi.string().required(),
  imageUrl: Joi.string().uri().optional(),
  namesOrigin: Joi.string().optional(),
  crystalSystem: Joi.string().optional(),
  starSign: Joi.string().optional(),
  chakra: Joi.string().optional(),
  element: Joi.string().optional(),
  charching: Joi.string().optional(),
  discharging: Joi.string().optional(),
  createdAt: Joi.date().default(() => new Date()).optional(),
  updatedAt: Joi.date().default(() => new Date()).optional(),
});

export const AdminValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(20),
  role: Joi.string().default("admin").optional(),
  createdAt: Joi.date().default(() => new Date()).optional(),
});