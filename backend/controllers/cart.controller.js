import Cart from "../models/cart.model.js";

export const sentCartData = async (req, res, next) => {
    try {
        const { cart } = req.body;

        const cartItems = await cart.map((item) => {
            Cart.create({
                foodName: item.foodName,
                price: item.price,
                quantity: item.quantity,
                createdBy: req.user.name
            });
        })

        res.status(200).json({
            success: true,
            message: 'Order Placed Successfully',
            data: cartItems
        })

    } catch (error) {
        next(error);
    }
}