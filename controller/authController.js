import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import bcrypt from "bcryptjs"

export const register = async (req, res, next) => {
    const isFirstAccount = await User.countDocuments() === 0
    req.body.role = isFirstAccount ? "admin" : "user"
  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    data: user,
  });
};

export const login = async (req, res, next) => {
  res.send('login');
};
