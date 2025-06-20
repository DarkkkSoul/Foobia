import Router from 'express'
import { createCafeFood, showCafeMenu } from '../controllers/cafeFood.controller.js';
import authorizeMiddleware from '../middlewares/auth.middleware.js';

const cafeFoodRouter = Router();

// this will be visible for admins -- create food through admin page
cafeFoodRouter.post('/add', authorizeMiddleware, createCafeFood);

// this will be visible for students
cafeFoodRouter.get('/menu', showCafeMenu);

export default cafeFoodRouter;