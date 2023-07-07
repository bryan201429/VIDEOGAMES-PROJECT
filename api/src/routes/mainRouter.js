const { Router } = require('express');
// Importar todos los routers MODULARIZADOS;
// Ejemplo: const authRouter = require('./auth.js');
const authRouter = require('./auth');
const videogamesRouter=require('./videogamesRoute');
const genresRouter=require('./genresRoute');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use('/auth', authRouter);
mainRouter.use('/videogames',videogamesRouter);
mainRouter.use('/genres',genresRouter);

module.exports = mainRouter;
