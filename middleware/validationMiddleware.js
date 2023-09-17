import { body, validationResult } from 'express-validator';
import { BadRequestError } from '../errors/customError.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }

      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  [body('company').notEmpty().withMessage('Company is required')],
  [body('jobLocation').notEmpty().withMessage('jobLocation is required')],
  [body('position').notEmpty().withMessage('position is required')],
]);
