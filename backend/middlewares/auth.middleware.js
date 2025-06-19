import jwt from 'jsonwbtoken'
import dotenv from 'dotenv'
import Admin from '../models/admin.model';

dotenv.config();

const authorizeMiddle = (req, res, next) => {
    try {
        let token;

        if (req.cookies) {
            token = req.cookies.token;
        }

        if (!token) {
            const error = new Error("Unauthorized");
            error.statusCode = 404;
            throw error;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECERT_KEY);

        const adminId = decoded.adminId;

        const admin = Admin.findById(adminId);
        if (!admin) {
            const error = new Error("Admin not found");
            error.statusCode = 400;
            throw error;
        }

        req.user = user;
        next();


    } catch (error) {
        next(error);
    }
}

export default authorizeMiddle;