import { Router } from 'express';
import { login, register } from '../controller/authController.js';

const route = Router();
route.post('/register', register);

export default route;
