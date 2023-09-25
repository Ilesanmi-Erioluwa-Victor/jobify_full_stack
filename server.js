import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

import { authenticateUser } from './middleware/auth/authMiddlware.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

import jobRoute from './routes/job.routes.js';
import authRoute from './routes/auth.routes.js';
import userRoute from './routes/user.routes.js';

const app = express();

process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : null;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser());
app.use(express.json());

app.use('/api/v1/jobs', authenticateUser, jobRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', authenticateUser, userRoute);
app.get('/api/v1/test', (req, res, next) => {
  console.log(
    res.status(200).json({
      msg: 'Hello world',
    })
  );
});
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
