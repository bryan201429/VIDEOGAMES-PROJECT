const { Router } = require('express');

const authRouter = Router();

authRouter.get('/login',(req,res)=>{
    console.log('Este es el /auth/login xdxd')
    try {
        res.status(200).json("Se logro")
    } catch (error) {
        res.status(400).json(error.message)
    }
});

module.exports =authRouter;