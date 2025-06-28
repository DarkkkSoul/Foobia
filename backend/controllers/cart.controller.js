import Cart from "../models/cart.model.js";

export const sentCartData = async (req, res, next) => {
    try {

        const cartDetails = await Cart.create({ ...req.body, orderBy: req.user.name });

        res.status(200).json({
            success: true,
            message: 'Order Placed Successfully',
            data: cartDetails
        })

    } catch (error) {
        next(error);
    }
}

export const viewCartData = async (req, res, next) => {
    try {

        const completeCart = await Cart.find();

        res.status(200).json({
            success: true,
            message: 'Cart Data loaded',
            completeCart
        })

    } catch (error) {
        next(error);
    }
}