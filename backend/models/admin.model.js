import mongoose from "mongoose";

const adminModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminModel);
export default Admin;