import { Router } from 'express';
import {
  getCurrentUser,
  getApplication,
  updateUser,
} from '../controller/userController.js';

import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import {
  authorizePermissions,
  checkForTestUser,
} from '../middleware/auth/authMiddlware.js';
import upload from '../middleware/multerMiddleware.js';

const route = Router();
route.get('/current-user', getCurrentUser);
route.get('/admin/app-stats', [authorizePermissions('admin'), getApplication]);
route.patch(
  '/update-user',
  checkForTestUser,
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
);

export default route;
