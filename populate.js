import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import Job from "./models/jobModel"
import User from "./models/userModel"
