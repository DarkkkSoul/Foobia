import mongoose from "mongoose";

const cartModel = new mongoose.Schema({
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

const Cart = mongoose.model("Cart", cartModel);
export default Cart;