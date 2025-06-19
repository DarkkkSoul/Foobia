import Router from 'express'
import { loginController, signUpController } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/signup', signUpController);
authRouter.post('/login', loginController);

export default authRouter;