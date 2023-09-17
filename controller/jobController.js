import { StatusCodes } from 'http-status-codes';
import Job from '../models/jobModel.js';

import { NotFoundError } from '../errors/customError.js';

export const getAllJobs = async (req, res, next) => {
  const jobs = await Job.find();
  res.status(StatusCodes.OK).json({
    length: jobs.length,
    status: 'success',
    message: 'ok',
    data: jobs,
  });
};

export const createJob = async (req, res, next) => {
  const { company, position } = req.body;
  const job = await Job.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ status: 'success', message: 'ok', data: job });
};

export const getJob = async (req, res, next) => {
  const { id } = req.params;
    const job = await Job.findById(id);
    
  if (!job) throw new NotFoundError(`No job found with this ID : ${id}`)
    
  res.json({ status: 'success', message: 'ok', data: job });
};

export const editJob = async (req, res, next) => {
  const { id } = req.params;
  const { position, company } = req.body;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedJob) {
    return res.status(StatusCodes.FORBIDDEN).json({
      status: 'fail',
      message: `No job found with this ID : ${id}`,
    });
  }

  res
    .status(StatusCodes.OK)
    .json({ status: 'success', message: 'ok', data: updatedJob });
};

export const deleteJob = async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);
  if (!job) {
    return res.status(StatusCodes.FORBIDDEN).json({
      status: 'fail',
      message: `No job found with this ID : ${id}`,
    });
  }
  res
    .status(StatusCodes.OK)
    .json({ status: 'success', message: 'Job deleted' });
};
