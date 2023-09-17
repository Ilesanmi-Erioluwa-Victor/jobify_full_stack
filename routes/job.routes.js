import { Router } from 'express';
import {
  createJob,
  deleteJob,
  editJob,
  getAllJobs,
  getJob,
} from '../controller/jobController.js';

const route = Router();

route.route('/').get(getAllJobs).post(createJob);
route.route('/:id').get(getJob).patch(editJob).delete(deleteJob);

export default route;
