const Joi = require('joi');

const jobValidationSchema = Joi.object({
  jobTitle: Joi.string().required().min(3).max(100),
  companyName: Joi.string().required().min(2).max(100),
  location: Joi.string().required().min(2).max(100),
  jobType: Joi.string().valid('Full-time', 'Part-time', 'Contract', 'Internship').required(),
  salaryRange: Joi.object({
    min: Joi.number().required().min(0),
    max: Joi.number().required().min(Joi.ref('min'))
  }).required(),
  jobDescription: Joi.string().required().min(50),
  requirements: Joi.array().items(Joi.string().min(5)).min(1).required(),
  responsibilities: Joi.array().items(Joi.string().min(5)).min(1).required(),
  applicationDeadline: Joi.date().iso().required().min('now')
});

module.exports = jobValidationSchema;