import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    company: String,
    location: String,
    jobStatus: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
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
