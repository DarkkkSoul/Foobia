import mongoose from "mongoose";

const cartModel = new mongoose.Schema({
    cartDetails: {
        type: Array,
        required: true
    },
    orderStatus: {
        type: Boolean,
        default: false,
    },
    orderBy: {
        type: mongoose.Schema.Types.String,
        ref: 'User',
        required: true
    },
}, { timestamps: true });

cartModel.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const Cart = mongoose.model("Cart", cartModel);
export default Cart;