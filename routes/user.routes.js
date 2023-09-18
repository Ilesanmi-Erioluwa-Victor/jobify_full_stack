import { Router } from 'express';

import {
  getCurrentUser,
  getApplication,
  updateUser,
} from '../controller/userController.js';

import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import { authorizePermissions } from '../middleware/auth/authMiddlware.js';

const route = Router();
route.get('/current-user', getCurrentUser);
route.get('/admin/app-stats', [authorizePermissions('admin'), getApplication]);
route.patch('/update-user', validateUpdateUserInput, updateUser);

export default route;
