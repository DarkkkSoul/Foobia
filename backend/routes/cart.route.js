import { Router } from "express";
import { sentCartData } from "../controllers/cart.controller.js";
import authorizeMiddleware from "../middlewares/auth.middleware.js";

const cartRouter = Router();

cartRouter.post('/checkout', authorizeMiddleware, sentCartData);

//show cart in admin page
cartRouter.get('/', authorizeMiddleware, sentCartData);

export default cartRouter;