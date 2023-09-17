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
  validateParam,
} from '../middleware/validationMiddleware.js';

const route = Router();

route.route('/').get(getAllJobs).post(validateJobInput, createJob);
route
  .route('/:id')
  .get(validateParam, getJob)
  .patch(validateJobInput, editJob)
  .delete(validateParam, deleteJob);

export default route;
