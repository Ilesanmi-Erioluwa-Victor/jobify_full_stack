import { Router } from 'express';
import { login, register } from '../controller/authController.js';
import { validateRegisterInput } from '../middleware/validationMiddleware.js';

const route = Router();
route.post('/register', validateRegisterInput, register);
route.post('/login', login);
export default route;
