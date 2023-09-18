import { Router } from 'express';
import {
  getCurrentUser,
  getApplication,
  updateUser,
} from '../controller/userController.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';

const route = Router();
route.get('/current-user', getCurrentUser);
route.get('/admin/app-stats', getApplication);
route.patch('/update-user', validateUpdateUserInput, updateUser);

export default route;
