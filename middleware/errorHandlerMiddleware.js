import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (error, req, res, next) => {
    console.log(error);
    const statusCode = 
  res.status(500).json({
    message: 'something went wrong',
  });
  next();
};

export default errorHandlerMiddleware;
