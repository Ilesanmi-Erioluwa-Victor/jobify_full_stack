import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import Job from '../models/jobModel.js';

export const getCurrentUser = async (req, res, next) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({
    data: user,
  });
};

export const getApplication = async (req, res, next) => {
  res.status(StatusCodes.OK).json({
    msg: 'application stats',
  });
};

export const updateUser = async (req, res, next) => {
  res.status(StatusCodes.OK).json({
    msg: 'update user',
  });
};
