import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from '../../errors/customError.js';
import { verifyJWT } from '../../utils/Token.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw new UnauthenticatedError('authentication failed');

  try {
    const { userId, role } = verifyJWT(token);

    const testUser = userId === 'testUserId';

    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication failed');
  }
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError('Demo user. Read only');
  next();
};


export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw new UnauthorizedError('unauthorized to access this route');
    next();
  };
};
