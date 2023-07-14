require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Videogames,Genres} =require('../../db')     //! Model Videogames

const getVideogamesById = async (req,res)=>{
    try {
    const {idVideogame}=req.params;
    const regexUUID =/^[0-9a-f]{8}-[0-9a-f]{4}-[4|5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    let gameFound=[];
    
    if(regexUUID.test(idVideogame)){        //Verifica si es un UUID con el regex 
        gameFound = await Videogames.findByPk(idVideogame,{
            include: { model: Genres, through: { attributes: [] } }
          });
        gameFound=gameFound;
        console.log(gameFound);   
    }
    else{

        let gameFoundAPI= await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
        
        let newGame={
            id: gameFoundAPI.data.id,
            name: gameFoundAPI.data.name,
            image: gameFoundAPI.data.background_image,
            rating: gameFoundAPI.data.rating,
            platforms: gameFoundAPI.data.platforms?.map(i=>i.platform.name),
            genres:gameFoundAPI.data.genres?.map(i=>i.name),
            description:gameFoundAPI.data.description,
        }
        gameFound=newGame;
        console.log(gameFound);
    } 

    res.status(200).json(gameFound);
    }catch(error){

        res.status(400).json('Game not found');
    }
};

module.exports={getVideogamesById};