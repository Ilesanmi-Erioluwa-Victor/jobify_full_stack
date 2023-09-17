import { Router } from 'express';
import {
  createJob,
  deleteJob,
  editJob,
  getAllJobs,
  getJob,
} from '../controller/jobController.js';
import { validateJobInput } from '../middleware/validationMiddleware.js';

const route = Router();

route.route('/').get(getAllJobs).post(validateJobInput, createJob);
route.route('/:id').get(getJob).patch(editJob).delete(deleteJob);

export default route;
