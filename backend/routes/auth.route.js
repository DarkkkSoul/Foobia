import Router from 'express'
import { signUpController } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/signup', signUpController);
authRouter.post('/login', (req, res) => res.send({ successMessage: "In login route" }));

export default authRouter;