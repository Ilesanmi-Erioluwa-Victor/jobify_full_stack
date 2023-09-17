import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import { nanoid } from 'nanoid';

let jobs = [
  {
    id: nanoid(),
    company: 'apple',
    position: 'frontend',
  },
  {
    id: nanoid(),
    company: 'apple',
    position: 'frontend',
  },
];
dotenv.config();

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
app.get('/api/v1/jobs/:id', (req, res, next) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({
      status: 'fail',
      message: `No job found with this ID : ${id}`,
    });
  }
  res.json({ status: 'success', message: 'ok', data: job });
});

// CREATE JOB
app.post('/api/v1/jobs', (req, res, next) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res.status(400).json({
      status: 'failed',
      msg: 'Please, provide all the required fields',
    });
  }

  const id = nanoid(10);
  const job = {
    id,
    company,
    position,
  };
  jobs.push(job);
  res.json({ status: 'success', message: 'ok', data: job });
});

// ALL JOBS
app.get('/api/v1/jobs', (req, res, next) => {
  res.json({ status: 'success', message: 'ok', data: jobs });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log('server running on : PORT', PORT);
});
