import express from 'express'
import authRouter from './routes/auth.route.js';
import connectToDb from './database/connectToDb.js';
import dotenv from 'dotenv'
import cafeFoodRouter from './routes/cafeFood.route.js';
import canteenFoodRouter from './routes/canteenFood.route.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import cartRouter from './routes/cart.route.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// middlewares
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/cafeteria', cafeFoodRouter);
app.use('/api/v1/canteen', canteenFoodRouter);
app.use('/api/v1/cart', cartRouter);

// error handling
app.use(errorMiddleware);


app.get('/', (req, res) => {
    res.send('<h2>Welcome to the backend of DBIT eats</h2>')
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
    connectToDb();
});