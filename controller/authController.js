import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';

export const register = async (req, res, next) => {
    const isFirstAccount = await User.countDocuments() === 0
  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    data: user,
  });
};

export const login = async (req, res, next) => {
  res.send('login');
};
