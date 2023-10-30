import { Router } from 'express';
import { login, register, logout } from '../controller/authController.js';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../middleware/validationMiddleware.js';
import rateLimiter from 'express-rate-limit';

const route = Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: {
    message: 'IP rate limit exceeded, retry in 15 minutes',
  },
});

route.post('/register', apiLimiter, validateRegisterInput, register);
route.post('/login', apiLimiter, validateLoginInput, login);
route.get('/logout', logout);
export default route;
