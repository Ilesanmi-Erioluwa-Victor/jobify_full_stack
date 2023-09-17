import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  company: String,
    location: String,
    jobStatus: {
        type: String,
        enum: ["interview", "declined", "pending"],
        default : "pending"
  }
});
