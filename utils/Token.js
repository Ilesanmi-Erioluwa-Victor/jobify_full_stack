import jwt from 'jsonwebtoken';

export const createJwt = (payload) => {
  const token = jwt.sign(payload, 'dgffffffffffgffg', {
    expiresIn: '10d',
  });

  return token;
};
