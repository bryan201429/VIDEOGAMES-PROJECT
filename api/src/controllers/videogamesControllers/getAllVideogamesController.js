require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Videogames,Genres} =require('../../db')     //! Model Videogames

const getAllVideogamesController= async(req,res)=>{
    try {
        console.log('Este es el controller videogamesall')
        const localVideogames= await Videogames.findAll({
            include:[{
                model:Genres,
                attributes: ['name'],
                through: { attributes: [] },

            }]
        });
        
        const localVideogamesdATA=localVideogames.map((game) => {
            return {
              ...game.dataValues, // Obtener solo los datos del videojuego sin información adicional
              genres: game.genres?.map((genre) => genre.name), // Obtener solo los nombres de los géneros asociados
            };
          });

            let videogames100=[];
            let allVideogames=[];
            for(let i=1;i<=5;i++){
                const response= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
                const videogamesData=response.data.results;

                videogames=videogamesData.map(game=>{return({
                    id:game.id,
                    name:game.name,
                    description:game.slug,
                    platforms:game.platforms?.map((p)=>p.platform.name),
                    image:game.background_image,
                    launchDate:game.released,
                    rating:game.rating,
                    genres:game.genres?.map((g)=>g.name)
                    })} 
                );
                videogames100.push(...videogames);
            }

            console.log('Estos son los JUEGOS LOCALES: ',localVideogamesdATA);
            // allVideogames=allVideogames.concat(videogames100);
            // allVideogames.push(...localVideogamesdATA);
            allVideogames=allVideogames.concat(localVideogamesdATA);
            allVideogames.push(...videogames100);

            // const responseData={
            //  allVideogames:allVideogames,
            //  localVideogames:localVideogames,   
            // };

            

        //const videogamesJSON = allVideogames.map((game) => game.toJSON()).reverse()
        res.status(200).json(allVideogames)

    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports= {getAllVideogamesController};