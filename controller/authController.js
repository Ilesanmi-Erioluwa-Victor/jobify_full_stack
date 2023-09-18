import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import { hashedPassword, comparePassword } from '../utils/Password.js';
import { UnauthenticatedError } from '../errors/customError.js';
import { createJwt } from '../utils/Token.js';

export const register = async (req, res, next) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  const Password = await hashedPassword(req.body.password);
  req.body.password = Password;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({
    status: 'success',
    message: 'User created',
  });
};

export const login = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));

  if (!isValidUser) throw new UnauthenticatedError('invalid credential');
  const token = createJwt({ userId: user._id, role: user.role });

  const aDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + aDay),
    secure: process.env.NODE_ENV === 'production',
  });
  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'user logged in',
  });
};

export const logout = async (req, res, next) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now())
  });

  res.status(StatusCodes.OK).json({msg : "user logged out"})
}
