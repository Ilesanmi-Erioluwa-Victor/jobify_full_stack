import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

import jobRoute from './routes/job.routes.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import authRoute from './routes/user.routes.js';

const app = express();

process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : null;

app.use(express.json());

app.use('/api/v1/jobs', jobRoute);
app.use('/api/v1/auth', authRoute);

app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'This route is not Found',
  });
});

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 8081;

try {
  await mongoose.connect(process.env.MONGODB_URL);
  app.listen(PORT, () => {
    console.log('server running on : PORT', PORT);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
