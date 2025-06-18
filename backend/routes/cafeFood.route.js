import Router from 'express'

const cafeFoodRouter = Router();

cafeFoodRouter.get('/menu', (req, res) => res.send({ message: "showing cafe menu" }));

export default cafeFoodRouter;