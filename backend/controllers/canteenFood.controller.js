import CanteenFood from "../models/canteenFood.model.js";

export const createCanteenFood = async (req, res, next) => {
    try {
        if (req.user.email === 'admin@gmail.com') {
            const canteenFood = await CanteenFood.create({ ...req.body, createdBy: req.admin.name });

            res.status(200).json({
                success: true,
                message: 'Canteen food created successfully',
                data: {
                    item: canteenFood
                }
            })
        } else {
            const error = new Error("Unauthorized");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        next(error);
    }
}

export const showCanteenMenu = async (req, res, next) => {
    try {
        const canteenMenu = await CanteenFood.find();

        res.status(200).json({
            success: true,
            message: 'Canteen Menu loaded',
            menu: {
                canteenMenu
            }
        })
    } catch (error) {
        next(error);
    }
}