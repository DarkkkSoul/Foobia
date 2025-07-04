import Cart from "../models/cart.model.js";

export const sentCartData = async (req, res, next) => {
    try {

        const cartDetails = await Cart.create({ ...req.body, orderBy: req.user.name });

        res.status(200).json({
            success: true,
            message: 'Order Placed Successfully',
            data: cartDetails
        });

    } catch (error) {
        next(error);
    }
}

export const viewCartData = async (req, res, next) => {
    try {

        const completeCart = await Cart.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: 'Cart Data loaded',
            completeCart
        })

    } catch (error) {
        next(error);
    }
}

export const viewHistory = async (req, res, next) => {
    try {

        const history = await Cart.find({ orderBy: req.user.name }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: 'History loaded',
            history
        })
    } catch (error) {
        next(error);
    }
}

export const updateStatus = async (req, res, next) => {
    try {
        const { cartid } = req.params;
        console.log(cartid)

        const cart = await Cart.findById(cartid);

        if (cart) {
            cart.orderStatus = true;
            await cart.save();
            res.status(200).json({
                success: true,
                message: 'Status Updated Successfully',
                data: cart
            })
        } else {
            res.status(404).json({
                success: false,
                errorMessage: 'Cart not found',
            });
        }

    } catch (error) {
        next(error);
    }
}

export const deleteCart = async (req, res, next) => {
    try {
        console.log(Date.now());
    } catch {
        next(error);
    }
}