require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Videogames,Genres} =require('../../db')     //! Model Videogames

const getVideogamesByName = async(req,res)=>{
    console.log('Route get byname');
    try {
        const {name}=req.query
        console.log(req.query);
        res.status(200).json('ok');
    } catch (error) {
        res.status(400).json(error.message)
    }
};

module.exports={getVideogamesByName};