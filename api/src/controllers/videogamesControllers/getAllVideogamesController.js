require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Videogames} =require('../../db')     //! Model Videogames

const getAllVideogamesController= async(req,res)=>{
    try {
        console.log('Este es el controller videogamesall')
        const localVideogames= await Videogames.findAll();
        
        //if(!localVideogames.length){
            //console.log('Aun no hay localVideogames')
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
                    })} 
                );
                //videogames100=videogames100.concat(videogames);
                videogames100.push(...videogames);
            }

            //console.log(videogames100);
            
            allVideogames=allVideogames.concat(videogames100);
            allVideogames.push(...localVideogames);
            const responseData={
             allVideogames:allVideogames,
             localVideogames:localVideogames,   
            };

            console.log(allVideogames);
            //await Videogames.bulkCreate(videogames100);
        //}

        //const videogamesJSON = allVideogames.map((game) => game.toJSON()).reverse()
        res.status(200).json(allVideogames)

    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports= {getAllVideogamesController};