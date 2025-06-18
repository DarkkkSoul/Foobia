import Router from 'express'

const authRouter = Router();

authRouter.post('/login', (req, re) => res.send({ message: "In login route" }));

export default authRouter;