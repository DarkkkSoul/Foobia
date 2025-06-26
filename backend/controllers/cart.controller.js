import Cart from "../models/cart.model.js";

export const sentCartData = async (req, res, next) => {
    try {

        const cartDetails = await Cart.create({ ...req.body, createdBy: req.user.name });

        res.status(200).json({
            success: true,
            message: 'Order Placed Successfully',
            data: cartDetails
        })

    } catch (error) {
        next(error);
    }
}