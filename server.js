import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';


dotenv.config();

import jobRoute from './routes/job.routes';

const app = express();

process.env.NODE_ENV === 'development' ? app.use(morgan('dev')) : null;

app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Hello world');
});

app.post('/', (req, res, next) => {
  console.log(req);
});

// GET JOB
app.get('/api/v1/jobs/:id');

// DELETE JOB
app.delete('/api/v1/jobs/:id');

// EDIT JOB
app.patch('/api/v1/jobs/:id');

// CREATE JOB
app.post('/api/v1/jobs');

// ALL JOBS
app.get('/api/v1/jobs');

app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'This route is not Found',
  });
});

app.use((error, req, res, next) => {});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log('server running on : PORT', PORT);
});
