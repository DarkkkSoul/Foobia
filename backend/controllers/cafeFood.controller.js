import CafeFood from "../models/cafeFood.model.js";

export const createCafeFood = async (req, res, next) => {
    try {
        if (req.user.email === 'admin@gmail.com') {
            const cafeFood = await CafeFood.create({ ...req.body, createdBy: req.user.name });

            res.status(200).json({
                success: true,
                message: 'Cafeteria food created successfully',
                data: {
                    item: cafeFood
                }
            })
        } else {
            res.status(400).json({
                success: false,
                message: 'Unauthorized'
            })
        }

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