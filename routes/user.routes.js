import { Router } from 'express';
import {
  getCurrentUser,
  getApplication,
  updateUser,
} from '../controller/userController.js';

const route = Router();
route.get('/current-user');
route.get('/admin/app-stats');
route.get('/update-user');

export default route;
