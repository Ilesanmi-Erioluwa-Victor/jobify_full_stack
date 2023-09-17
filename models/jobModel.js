import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  company: String,
  location: String,
});
