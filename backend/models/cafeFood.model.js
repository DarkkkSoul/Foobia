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
    quantity: {
        type: Number,
        default: 1,
    },
    createdBy: {
        type: mongoose.Schema.Types.String,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const CafeFood = mongoose.model("CafeFood", cafeFoodModel);
export default CafeFood;