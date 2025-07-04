import { Router } from "express";
import { deleteCart, sentCartData, updateStatus, viewCartData, viewHistory } from "../controllers/cart.controller.js";
import authorizeMiddleware from "../middlewares/auth.middleware.js";

const cartRouter = Router();

cartRouter.post('/checkout', authorizeMiddleware, sentCartData);

//show cart in admin page
cartRouter.get('/cafeteria/admin', authorizeMiddleware, viewCartData);

cartRouter.get('/cafeteria/history', authorizeMiddleware, viewHistory);

cartRouter.put('/cafeteria/update-status/:cartid', authorizeMiddleware, updateStatus);

cartRouter.delete('/cafeteria/delete', deleteCart);

export default cartRouter;