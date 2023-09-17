import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError } from '../errors/customError.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constant.js';
import mongoose from 'mongoose';
import Job from '../models/jobModel.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => {
          return [`${error.path} : ${error.msg}`];
        });
        if (errorMessages[0].startsWith('No')) {
          throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }

      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  [body('company').notEmpty().withMessage('Company is required')],
  [body('jobLocation').notEmpty().withMessage('job location is required')],
  [body('position').notEmpty().withMessage('position is required')],
  [
    body('jobStatus')
      .isIn(Object.values(JOB_STATUS))
      .withMessage('invalid status value'),
  ],
  [
    body('jobType')
      .isIn(Object.values(JOB_TYPE))
      .withMessage('invalid type value'),
  ],
]);

export const validateParam = withValidationErrors([
  param('id').custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError('invalid MongoDB id');

    const job = await Job.findById(value);

    if (!job) throw new NotFoundError('No job with this id found');
  }),
]);
