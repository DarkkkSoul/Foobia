import Router from 'express'

const authRouter = Router();

authRouter.post('/login', (req, re) => res.send({ successMessage: "In login route" }));

export default authRouter;