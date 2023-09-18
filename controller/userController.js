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

  const users = await User.countDocuments();
    const jobs = await Job.countDocuments();

      if (req.user.role !== 'admin') {
        throw new Error('Only admin can access this route');
      }
  res.status(StatusCodes.OK).json({
    users: users,
    jobs: jobs,
  });
};

export const updateUser = async (req, res, next) => {
  const obj = { ...req.body };
  delete obj.password;
  console.log(obj);
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({
    msg: 'update user',
  });
};
