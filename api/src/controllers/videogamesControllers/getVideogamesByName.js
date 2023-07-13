require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Videogames,Genres} =require('../../db')     //! Model Videogames
const { Op } = require('sequelize');

const getVideogamesByName = async(req,res)=>{
    console.log('Route getByName');
    const {name}=req.query
    console.log("el name es:",name);
    try {
        
        const dbResponse = await Videogames.findAll({
            where:{
                name:{
                 [Op.iLike]: `%${name}%`}
            }
        })
        //console.log(dbResponse)

        let apiRes=await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        apiRes=apiRes.data.results;
        const videogame=apiRes.map(game=>{return({
            id:game.id,
            name:game.name,
            description:game.description? game.description:'',
            platforms:game.platforms.map((p)=>p.platform.name),
            image:game.background_image,
            launchDate:game.released,
            rating:game.rating,
            genres: game.genres.map((genre)=>genre.map)
            })} 
        );

        const allGames = dbResponse.concat(videogame);         //Junta los juegos de la DB con los de la API
        let Games15=allGames.slice(0,15);
            //console.log(Games15);
            if(Games15.length!==0)res.status(200).json(Games15);
            else throw Error('404: Game not found')
    } catch (error) {
        res.status(400).json(error.message)
    }
};

module.exports={getVideogamesByName};