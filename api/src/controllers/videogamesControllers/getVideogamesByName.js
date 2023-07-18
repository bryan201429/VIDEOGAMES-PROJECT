require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Videogames,Genres} =require('../../db')     //! Model Videogames
const { Op } = require('sequelize');

const getVideogamesByName = async(req,res)=>{
    console.log('Este es el Route getByName');
    let {name}=req.query
    name = name.replace(/"/g, '');
    console.log("el name es:",name);
    try {
        
        let apiRes=await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        apiRes=apiRes.data.results;
        const videogameApi=apiRes.map(game=>{return({
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
        let localVideogames = await Videogames.findAll({
            where:{
                name:{
                 [Op.iLike]: `%${name}%`}
            }
        })
        let localGames= localVideogames.map(game=>{
            return game.dataValues;
        })

        //console.log('Juegos locales:',localGames);
        const allGames = localGames.concat(videogameApi);         //Junta los juegos de la DB con los de la API.
        let Games15=allGames.slice(0,15);
        console.log('Juegos locales:',localGames)
 
        
        let responseData={
            allVideogames:Games15,
            localVideogames:localGames   
           };
        console.log('TODOS LOS JUEGOS(DB+API):',responseData)
            if(Games15.length!==0)res.status(200).json(responseData);
            else throw Error('404: Game not found')

    } catch (error) {
        res.status(400).json(error.message)
    }
};

module.exports={getVideogamesByName};