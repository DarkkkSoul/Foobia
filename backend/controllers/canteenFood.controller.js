import CanteenFood from "../models/canteenFood.model.js";

export const createCanteenFood = async (req, res, next) => {
    try {

        const canteenFood = await CanteenFood.create({ ...req.body, createdBy: req.admin.name });

        res.status(200).json({
            success: true,
            message: 'Canteen food created successfully',
            data: {
                item: canteenFood
            }
        })
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