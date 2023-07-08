const {Router} =require('express');
const {API_KEY} = process.env;
const {getAllVideogamesController}=require('../controllers/videogamesControllers/getAllVideogamesController');
const {getVideogamesById}=require('../controllers/videogamesControllers/getVideogamesById');
const {getVideogamesByName}=require('../controllers/videogamesControllers/getVideogamesByName');
const videogamesRouter=Router();


videogamesRouter.get('/',getAllVideogamesController);
videogamesRouter.get('/',getVideogamesByName);

videogamesRouter.get('/:idVideogame',getVideogamesById);

videogamesRouter.post('/',(req,res)=>{

})



module.exports =videogamesRouter;