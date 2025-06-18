import { Router } from "express";

const canteenFoodRouter = Router();

canteenFoodRouter.get('/menu', (req, res) => res.send({ message: "showing canteen menu" }));

export default canteenFoodRouter;