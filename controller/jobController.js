import Job from '../models/jobModel.js';

export const getAllJobs = async (req, res, next) => {
  const jobs = await Job.find();
  res.json({ status: 'success', message: 'ok', data: jobs });
};

export const createJob = async (req, res, next) => {
  const { company, position } = req.body;
  const job = await Job.create(req.body);
  res.status(201).json({ status: 'success', message: 'ok', data: job });
};

export const getJob = async (req, res, next) => {
  const { id } = req.params;
    const job = await Job.findById(id)
  if (!job) {
    return res.status(404).json({
      status: 'fail',
      message: `No job found with this ID : ${id}`,
    });
  }
  res.json({ status: 'success', message: 'ok', data: job });
};

export const editJob = async (req, res, next) => {
  const { id } = req.params;
  const { position, company } = req.body;

  if (!company || !position) {
    return res.status(400).json({
      status: 'failed',
      msg: 'Please, provide all the required fields',
    });
  }

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({
      status: 'fail',
      message: `No job found with this ID : ${id}`,
    });
  }
  job.company = company;
  job.position = position;
  res.json({ status: 'success', message: 'ok', data: job });
};

export const deleteJob = async (req, res, next) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({
      status: 'fail',
      message: `No job found with this ID : ${id}`,
    });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;
  res.json({ status: 'success', message: 'Job deleted' });
};
