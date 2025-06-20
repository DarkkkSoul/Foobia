import { Router } from "express";

const canteenFoodRouter = Router();

// this will be visible for admins -- create food through admin page
canteenFoodRouter.post('/add', (req, res) => res.send({ successMessage: "create canteen food" }));

// this will be visible for students
canteenFoodRouter.get('/menu', (req, res) => res.send({ successMessage: "showing canteen menu" }));

export default canteenFoodRouter;