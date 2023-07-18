const {Router} =require('express');
const {API_KEY} = process.env;
const axios = require('axios');
const {Videogames,Genres} =require('../../db')     //! Model Videogames

const createVideogame = async (req,res)=>{
    try {
        const {name, description,platforms, image, launchDate,rating,genres,created}=req.body;
        console.log(name, description,platforms, image, launchDate,rating,genres,created);
        //if(!name||!description||!platforms) res.status(400).json("Information Incomplete")
        const newGame= await Videogames.create({
            name, 
            description,
            platforms, 
            image, 
            launchDate,
            rating,
            genres,
            created
        });

        genres.forEach(async (genre) => {
            let dbGenre=await Genres.findAll({
                where:{name:genre
                }
            });
           if(dbGenre) {newGame.addGenre(dbGenre)}
           else {throw Error('Try with another Genre')};
            
        });
        res.status(200).json(newGame);
    } catch (error) {
        res.status(400).json(error.message);
    }

}

module.exports={
    createVideogame
}