import Router from 'express'

const cafeFoodRouter = Router();

// this will be visible for admins -- create food through admin page
cafeFoodRouter.post('/', (req, res) => res.send({ successMessage: "create cafeteria food" }));

// this will be visible for students
cafeFoodRouter.get('/menu', (req, res) => res.send({ successMessage: "showing cafe menu" }));

export default cafeFoodRouter;