require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios');
const {Videogames,Genres} =require('../../db')     //! Model Videogames
const { Op } = require('sequelize');

const getVideogamesByName = async(req,res)=>{
    console.log('Route getByN.ame');
    const {name}=req.query
    console.log(name);
    try {


        const response = await Videogames.findAll({
            where:{
                name:{
                    [Op.Like]: `%${name}%`.toLowerCase()
                }
            }
        })
        console.log(response)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error.message)
    }
};

module.exports={getVideogamesByName};