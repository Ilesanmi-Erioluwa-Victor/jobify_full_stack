import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const msg = error.message;
    res.status(500).json({
    message: 'something went wrong',
  });
  next();
};

export default errorHandlerMiddleware;
