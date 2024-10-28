import Joi from 'joi';

export const stoneValidationSchema = {
  POST: Joi.object({
    name: Joi.string().required(),
    imageUrl: Joi.string().uri().allow("").optional(),
    namesOrigin: Joi.string().allow("").optional(),
    crystalSystem: Joi.string().allow("").optional(),
    starSign: Joi.string().allow("").optional(),
    chakra: Joi.string().allow("").optional(),
    element: Joi.string().allow("").optional(),
    charging: Joi.string().allow("").optional(),
    discharging: Joi.string().allow("").optional(),
    description: Joi.string().allow("").optional(),
    healingPotential: Joi.alternatives().try(
      Joi.string().allow(""),
      Joi.array().items(Joi.string()).optional() 
    ).optional(),
    howToUse: Joi.alternatives().try(
      Joi.string().allow(""), 
      Joi.array().items(Joi.string()).optional()
    ).optional(),
    otherInfo: Joi.alternatives().try(
      Joi.string().allow(""),
      Joi.array().items(Joi.string()).optional()
    ).optional(),
  }),
  
  PUT: Joi.object({
    name: Joi.string().allow("").optional(),
    imageUrl: Joi.string().uri().allow("").optional(),
    namesOrigin: Joi.string().allow("").optional(),
    crystalSystem: Joi.string().allow("").optional(),
    starSign: Joi.string().allow("").optional(),
    chakra: Joi.string().allow("").optional(),
    element: Joi.string().allow("").optional(),
    charging: Joi.string().allow("").optional(),
    discharging: Joi.string().allow("").optional(),
    description: Joi.string().allow("").optional(),
    healingPotential: Joi.alternatives().try(
      Joi.string().allow(""), 
      Joi.array().items(Joi.string()).optional() 
    ).optional(),
    howToUse: Joi.alternatives().try(
      Joi.string().allow(""), 
      Joi.array().items(Joi.string()).optional() 
    ).optional(),
    otherInfo: Joi.alternatives().try(
      Joi.string().allow(""), 
      Joi.array().items(Joi.string()).optional()
    ).optional(),
  }),
};

export const AdminValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6).max(20),
  role: Joi.string().default("admin").optional(),
  createdAt: Joi.date().default(() => new Date()).optional(),
});
