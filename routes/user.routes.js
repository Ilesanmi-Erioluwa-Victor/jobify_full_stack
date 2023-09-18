import { Router } from 'express';
import {
  getCurrentUser,
  getApplication,
  updateUser,
} from '../controller/userController.js';

const route = Router();
route.get('/current-user', getCurrentUser);
route.get('/admin/app-stats', getApplication);
route.get('/update-user', updateUser);

export default route;
