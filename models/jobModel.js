import mongoose from 'mongoose';
import { JOB_STATUS } from '../utils/constant';

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: 'pending',
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'internship'],
      default: 'full-time',
    },
    jobLocation: {
      type: String,
      default: 'My city',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
