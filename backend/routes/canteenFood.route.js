import { Router } from "express";

const canteenFoodRouter = Router();

// this will be visible for admins -- create food through admin page
canteenFoodRouter.post('/', (req, res) => res.send({ message: "create canteen food" }));

// this will be visible for students
canteenFoodRouter.get('/menu', (req, res) => res.send({ message: "showing canteen menu" }));

export default canteenFoodRouter;