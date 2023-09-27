import { StatusCodes } from 'http-status-codes';
import Job from '../models/jobModel.js';
import mongoose from 'mongoose';
import day from 'dayjs';

export const getAllJobs = async (req, res, next) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({
    length: jobs.length,
    status: 'success',
    message: 'ok',
    data: jobs,
  });
};

export const createJob = async (req, res, next) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ status: 'success', message: 'ok', data: job });
};

export const getJob = async (req, res, next) => {
  const job = await Job.findById(req.params.id);

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

export const showStats = async (req, res, next) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplication = [
    {
      date: 'May 23',
      count: 12,
    },

    {
      date: 'Jun 23',
      count: 9,
    },

    {
      date: 'Jul 23',
      count: 3,
    },
  ];

  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'ok',
    defaultStats,
    monthlyApplication,
  });
};
