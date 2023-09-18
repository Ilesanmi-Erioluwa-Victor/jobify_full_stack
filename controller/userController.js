import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import Job from '../models/jobModel.js';

export const getCurrentUser = async (req, res, next) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({
    data: userWithoutPassword,
  });
};

export const getApplication = async (req, res, next) => {
  res.status(StatusCodes.OK).json({
    msg: 'application stats',
  });
};

export const updateUser = async (req, res, next) => {
    const obj = { ...req.body };
    delete obj.password
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body);
  res.status(StatusCodes.OK).json({
    msg: 'update user',
  });
};
