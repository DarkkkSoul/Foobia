import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("DB CONNECTED!!");
    } catch (error) {
        console.log('Error connecting to DB: ', error);
        process.exit(1);
    }
}
export default connectToDb;