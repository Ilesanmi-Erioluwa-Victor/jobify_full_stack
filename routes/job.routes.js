import { Router } from 'express';
import {
  createJob,
  deleteJob,
  editJob,
  getAllJobs,
  getJob,
} from '../controller/jobController';

const route = Router();

route.route("/").get(getAllJobs).post(createJob)
