import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        uppercase: false,
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    }
}, { timestamps: true });

const User = mongoose.model('User', userModel);
export default User;