import { body, validationResult } from 'express-validator';
import { BadRequestError } from '../errors/customError.js';
BadRequestError

[body('name').notEmpty().withMessage('Name is required')],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({
        errors: errorMessages,
      });
    }

    next();
  },
