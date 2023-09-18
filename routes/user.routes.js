import { Router } from 'express';
import { login, register } from '../controller/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';

const route = Router();
route.post('/register', validateRegisterInput, register);
route.post('/login', validateLoginInput, login);
route.get("/logout",)
export default route;
