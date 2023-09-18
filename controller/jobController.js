import { StatusCodes } from 'http-status-codes';
import Job from '../models/jobModel.js';

export const getAllJobs = async (req, res, next) => {
  console.log(req.user);
  const jobs = await Job.find();
  res.status(StatusCodes.OK).json({
    length: jobs.length,
    status: 'success',
    message: 'ok',
    data: jobs,
  });
};

export const createJob = async (req, res, next) => {
  const job = await Job.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ status: 'success', message: 'ok', data: job });
};

export const getJob = async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  res.json({ status: 'success', message: 'ok', data: job });
};

export const editJob = async (req, res, next) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ status: 'success', message: 'ok', data: updatedJob });
};

export const deleteJob = async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);
  res.json({ status: 'success', message: 'Job deleted' });
};
