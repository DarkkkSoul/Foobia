import mongoose from 'mongoose'
import Admin from '../models/admin.model.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export const signUpController = async (req, res, next) => {

    const mongooseSession = await mongoose.startSession();
    mongooseSession.startTransaction();

    try {

        const { name, email, password } = req.body;

        const admin = await Admin.findOne({ email });

        if (admin) {
            return res.status(400).json({
                success: false,
                message: 'User already exist'
            })
        }

        // const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, 10);
        //array of objects
        const newAdmins = await Admin.create([{ name, email, password: hashedPassword }], { session: mongooseSession });

        const token = jwt.sign({ adminId: newAdmins[0]._id }, process.env.JWT_SECERT_KEY, { expiresIn: process.env.JWT_EXPIRY });

        mongooseSession.commitTransaction();
        await mongooseSession.endSession();

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: {
                token,
                admin: newAdmins[0]
            }
        });
    } catch (error) {
        mongooseSession.abortTransaction();
        await mongooseSession.endSession();
        next(error);
    }
}

export const loginController = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({
                success: false,
                message: "User doesnot exsist"
            });
        }

        const isPassValid = await bcrypt.compare(password, admin.password);

        if (!isPassValid) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }

        const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECERT_KEY, { expiresIn: process.env.JWT_EXPIRY });

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: {
                token,
                admin: admin
            }
        });

    } catch (error) {
        next(error);
    }
}