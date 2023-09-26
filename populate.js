import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import Job from './models/jobModel';
import User from './models/userModel';

try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await User.findOne({ email: 'test@test.com' });
  const jsonJob = JSON.parse(
    await readFile(new URL('./utils/MOCK_DATA.json', import.meta.url))
  );
  const jobs = jsonJob.map((job) => {
    return { ...job, createdBy: user_id };
  });
} catch (error) {}
