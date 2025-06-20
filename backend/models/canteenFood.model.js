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
    quantity: {
        type: Number,
        default: 1,
    },
    createdBy: {
        type: mongoose.Schema.Types.String,
        ref: 'Admin',
        required: true
    }
}, { timestamps: true });

const CanteenFood = mongoose.model("CanteenFood", canteenFoodModel);
export default CanteenFood;