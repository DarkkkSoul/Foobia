import CafeFood from "../models/cafeFood.model.js";

export const createCafeFood = async (req, res, next) => {
    try {

        const cafeFood = await CafeFood.create({ ...req.body, createdBy: req.admin.name });

        res.status(200).json({
            success: true,
            message: 'Cafeteria food created successfully',
            data: {
                item: cafeFood
            }
        })
    } catch (error) {
        next(error);
    }
}

export const showCafeMenu = async (req, res, next) => {
    try {

        const cafeMenu = await CafeFood.find();

        res.status(200).json({
            success: true,
            message: 'Cafeteria Menu loaded',
            menu: {
                cafeMenu
            }
        });


    } catch (error) {
        next(error);
    }
}