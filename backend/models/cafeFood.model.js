import mongoose from "mongoose";

const cafeFoodModel = new mongoose.Schema({
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

const CafeFood = mongoose.model("CafeFood", cafeFoodModel);
export default CafeFood;