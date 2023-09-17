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

export const getAllJobs = async (req, res, next) => {
  res.json({ status: 'success', message: 'ok', data: jobs });
};

export const createJob = async (req, res, next) => {
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
};

ex
