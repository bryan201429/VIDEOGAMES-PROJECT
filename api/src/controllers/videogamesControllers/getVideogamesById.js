require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Videogames} =require('../../db')     //! Model Videogames

const getVideogamesById = async (req,res)=>{
    try {
        const {idVideogame}=req.params;
        
        const gameFound= await Videogames.findByPk(idVideogame);

        res.status(200).json(gameFound);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports={getVideogamesById};