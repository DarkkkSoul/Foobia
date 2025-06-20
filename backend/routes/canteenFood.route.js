import { Router } from "express";
import { createCanteenFood, showCanteenMenu } from "../controllers/canteenFood.controller.js";
import authorizeMiddleware from "../middlewares/auth.middleware.js";

const canteenFoodRouter = Router();

// this will be visible for admins -- create food through admin page
canteenFoodRouter.post('/add', authorizeMiddleware, createCanteenFood);

// this will be visible for students
canteenFoodRouter.get('/menu', showCanteenMenu);

export default canteenFoodRouter;