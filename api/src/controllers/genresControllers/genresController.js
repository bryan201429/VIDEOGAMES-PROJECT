require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Genres } = require('../../db');     //!Model Genres

const getGenresController = async (req, res) => {
  console.log('getGenresController');

  try {
    const localGenres = await Genres.findAll();

    if (!localGenres.length) {
      const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
      
      const genresData = response.data.results; // Acceder a la propiedad results de response.data
      const genres = genresData.map(item => {return ({name:item.name})
        });

      await Genres.bulkCreate(genres);
         //const genresJSON = localGenres.map((genre) => genre.toJSON()).reverse()
      res.status(200).json(genres);
    }
    else{
      res.status(200).json(localGenres);
    }
     
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getGenresController,
};
