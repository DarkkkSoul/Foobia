import mongoose from "mongoose";

const adminModel = new mongoose.Schema({
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

const Admin = mongoose.model('Admin', adminModel);
export default Admin;