import { UnauthenticatedError } from '../../errors/customError.js';
import { verifyJWT } from '../../utils/Token.js';

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw new UnauthenticatedError('authentication failed');

  try {
      const user = verifyJWT(token);
      console.log(user)
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication failed');
  }
};
