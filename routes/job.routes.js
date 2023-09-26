import { Router } from 'express';
import {
  createJob,
  deleteJob,
  editJob,
  getAllJobs,
  getJob,
} from '../controller/jobController.js';
import {
  validateJobInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/auth/authMiddlware.js';

const route = Router();
route
  .route('/')
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

route
  .route('/:id')
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, editJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default route;
