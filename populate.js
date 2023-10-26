import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import Job from './models/jobModel.js';
import User from './models/userModel.js';

try {
  await mongoose.connect(process.env.MONGODB_URL);
  const user = await User.findOne({ email: 'test@test.com' });
  const jsonJob = JSON.parse(
    await readFile(new URL('./utils/MOCK_DATA.json', import.meta.url))
  );
    const jobs = jsonJob.map((job) => {
      console.log("+++++++++", job)
    return { ...job, createdBy: user._id };
  });
  await Job.deleteMany({ createdBy: user._id });
  const tit= await Job.create(jobs);

//   console.log(tit);
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exist(1);
}
