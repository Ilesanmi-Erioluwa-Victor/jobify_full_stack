import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

import jobRoute from './routes/job.routes.js';

const app = express();

process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : null;

app.use(express.json());

app.post('/', (req, res, next) => {
  console.log(req);
});

app.use('/api/v1/jobs', jobRoute);

app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'This route is not Found',
  });
});

app.use((error, req, res, next) => {
  console.log(error);
  next();
});

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
