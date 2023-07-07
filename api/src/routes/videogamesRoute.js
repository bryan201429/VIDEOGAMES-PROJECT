const {Router} =require('express');
const {API_KEY} = process.env;
const {getAllVideogamesController}=require('../controllers/videogamesControllers/getAllVideogamesController');
const {getVideogamesById}=require('../controllers/videogamesControllers/getVideogamesById');
const videogamesRouter=Router();


videogamesRouter.get('/',getAllVideogamesController);
videogamesRouter.get('/:idVideogame',getVideogamesById)
videogamesRouter.get('/name',(req,res)=>{

})
videogamesRouter.post('/',(req,res)=>{

})

videogamesRouter.post('/',(req,res)=>{

})

module.exports =videogamesRouter;