import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import { hashedPassword } from '../utils/Password.js';
import { UnauthenticatedError } from '../errors/customError.js';

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
 const user = await User.findOne({email : req.body.email})

    if(!user) throw new UnauthenticatedError("invalid credential")
};
