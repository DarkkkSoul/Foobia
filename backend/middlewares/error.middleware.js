const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };
        error.message = err.message;
        console.log(error.message);

        res.status(error.statusCode || 500).json({
            success: false,
            errorMessage: error.message,
        });
    } catch (error) {
        next(error);
    }
}
export default errorMiddleware;