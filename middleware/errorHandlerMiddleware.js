import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (error, req, res, next) => {
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = error.message || 'Something went wrong, try again ';

  res.json({
    message: msg,
    statusCode,
  });
  next();
};

export default errorHandlerMiddleware;
