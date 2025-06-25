import mongoose from 'mongoose'
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

export const signUpController = async (req, res, next) => {

    const mongooseSession = await mongoose.startSession();
    mongooseSession.startTransaction();

    try {

        const { name, email, password } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            await mongooseSession.abortTransaction();
            await mongooseSession.endSession();
            return res.status(400).json({
                success: false,
                message: 'User already exist'
            })
        }

        // const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, 10);
        //array of objects
        const newUsers = await User.create([{ name, email, password: hashedPassword }], { session: mongooseSession });

        const token = jwt.sign({ userId: newUsers[0]._id }, process.env.JWT_SECERT_KEY, { expiresIn: process.env.JWT_EXPIRY });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // true in prod, false locally
            maxAge: 86400000,
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            path: '/',
        });

        await mongooseSession.commitTransaction();
        await mongooseSession.endSession();

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: {
                token,
                user: newUsers[0]
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

        const user = await User.findOne({ email });
        if (!user) {
            const error = new Error("User not found");
            error.statusCode = 400;
            throw error;
        }

        const isPassValid = await bcrypt.compare(password, user.password);

        if (!isPassValid) {
            const error = new Error("Invalid password");
            error.statusCode = 400;
            throw error;
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECERT_KEY, { expiresIn: process.env.JWT_EXPIRY });

        // store token in cookie

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // true in prod, false locally
            maxAge: 86400000,
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            path: '/',
        });

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: {
                token,
                user: user
            }
        });

    } catch (error) {
        next(error);
    }
};

export const logoutController = async (req, res, next) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            path: '/',
        });

        return res.status(200).json({
            success: true,
            message: "User logged out successfully",
        });

    } catch (error) {
        next(error);
    }
}