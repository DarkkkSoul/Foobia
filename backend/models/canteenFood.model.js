import mongoose from "mongoose";

const canteenFoodModel = mongoose.Schema({
    foodName: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const CanteenFood = mongoose.model("CanteenFood", canteenFoodModel);
export default CanteenFood;