import mongoose from "mongoose";

const cartModel = new mongoose.Schema({
    cartDetail: {
        type: Array,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.String,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartModel);
export default Cart;