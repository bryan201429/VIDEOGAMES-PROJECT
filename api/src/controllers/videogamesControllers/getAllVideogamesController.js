require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Videogames} =require('../../db')     //! Model Videogames

const getAllVideogamesController= async(req,res)=>{
    try {
        console.log('Este es el controller videogamesall')
        const localVideogames= await Videogames.findAll();
        
        if(!localVideogames.length){
            //console.log('Aun no hay localVideogames')
            let videogames100=[];

            for(let i=1;i<=5;i++){
                const response= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
                const videogamesData=response.data.results;
                //console.log(videogamesData);

                videogames=videogamesData.map(game=>{return({
                    
                    idApi:game.id,
                    name:game.name,
                    description:"",
                    platforms:game.platforms?.map((p)=>p.platform.name),
                    image:game.background_image,
                    launchDate:game.released,
                    rating:game.rating,
                    })} 
                );
                //videogames100=videogames100.concat(videogames);
                videogames100.push(...videogames);
            }
            console.log(videogames100);
            await Videogames.bulkCreate(videogames100);
        }

        const videogamesJSON = localVideogames.map((game) => game.toJSON()).reverse()
        res.status(200).json(videogamesJSON)

    } catch (error) {
        res.status(400).json(error.message)
    }
}


module.exports= {getAllVideogamesController};