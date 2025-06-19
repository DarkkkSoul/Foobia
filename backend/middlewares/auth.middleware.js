import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import Admin from '../models/admin.model.js';

dotenv.config();

const authorizeMiddleware = async (req, res, next) => {
    try {
        let token;

        if (req.cookies) {
            token = req.cookies.token;
        }

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            const error = new Error("Unauthorized");
            error.statusCode = 404;
            throw error;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECERT_KEY);

        const adminId = decoded.adminId;

        const admin = await Admin.findById(adminId);
        if (!admin) {
            const error = new Error("Admin not found");
            error.statusCode = 400;
            throw error;
        }

        req.admin = admin;
        next();


    } catch (error) {
        next(error);
    }
}

export default authorizeMiddleware