import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import Job from '../models/jobModel.js';
import cloudinary from 'cloudinary';
import { promises as fs } from 'fs';

export const getCurrentUser = async (req, res, next) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({
    data: userWithoutPassword,
  });
};

export const getApplication = async (req, res, next) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({
    users: users,
    jobs: jobs,
  });
};

export const updateUser = async (req, res, next) => {
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);
  res.status(StatusCodes.OK).json({
    msg: 'update user',
  });
};
