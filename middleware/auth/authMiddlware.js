import { UnauthenticatedError } from '../../errors/customError.js';
import { verifyJWT } from '../../utils/Token.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw new UnauthenticatedError('authentication failed');

  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication failed');
  }
};

export const authorizePermissions = (req, res, next) => {
  
}
