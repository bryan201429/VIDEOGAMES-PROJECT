const {Router} =require('express');
const genresRouter=Router();        //!Ejecución de router
const {getGenresController}=require('../controllers/genresControllers/genresController')

genresRouter.get('/',getGenresController);
    //res.status(200).json(`Este es el genresRoutes y la key: ${API_KEY}`);
    //console.log(API_KEY)



module.exports =genresRouter;