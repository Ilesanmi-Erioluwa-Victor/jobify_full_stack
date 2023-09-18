import mongoose from 'mongoose';
import { USER_ROLE } from '../utils/constant.js';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: 'lastName',
  },
  location: {
    type: String,
    default: 'my city',
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLE),
    default: USER_ROLE.USER,
  },
});
