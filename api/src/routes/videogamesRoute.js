const {Router} =require('express');
const {API_KEY} = process.env;
const {getAllVideogamesController}=require('../controllers/videogamesControllers/getAllVideogamesController');
const {getVideogamesById}=require('../controllers/videogamesControllers/getVideogamesById');
const {getVideogamesByName}=require('../controllers/videogamesControllers/getVideogamesByName');
const {createVideogame} = require('../controllers/videogamesControllers/createVideogame')
const videogamesRouter=Router();

videogamesRouter.get('/',getAllVideogamesController);
videogamesRouter.get('/name',getVideogamesByName);
videogamesRouter.get('/:idVideogame',getVideogamesById);
videogamesRouter.post('/',createVideogame);



module.exports =videogamesRouter;