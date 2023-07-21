import { useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { postGame,getGames } from '../../redux/actions';
import { useEffect } from 'react';
import './form.style.css';
import Navbar from '../../components/navbar/navbar.component';
import backGroundVideoHome from '../../assets/mountains.mp4'

const dateRegex = /^(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|1[0-2])(\/|-)\d{2}(\d{2})?$/;
const urlRegex = /^(http:\/\/|https:\/\/)?[a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?$/;
const ratingRegex = /^(?:[0-5](?:\.\d*)?)$/;

const voidRegex = /\S+/;

const platformsOptions = ['Play Station', 'Xbox', 'Windows', 'Mac', 'Android', 'iOS', 'Other'];

const genresOptions = [
  { name: "Action" },
  { name: "Indie" },
  { name: "Adventure" },
  { name: "RPG" },
  { name: "Strategy" },
  { name: "Shooter" },
  { name: "Casual" },
  { name: "Simulation" },
  { name: "Puzzle" },
  { name: "Arcade" },
  { name: "Platformer" },
  { name: "Massively Multiplayer" },
  { name: "Racing" },
  { name: "Sports" },
  { name: "Fighting" },
  { name: "Family" },
  { name: "Board Games" },
  { name: "Educational" },
  { name: "Card" },
];

function Form() {
  const dispatch = useDispatch()   
  const myGames=useSelector((state)=>state.myGames); 
  const allGames = useSelector((state)=>state.allGames);
  const [showAlert, setShowAlert] = useState(false);                              //! Estado local para mostrar alert al enviar el juego

  const [input, setInput] = useState({
    name: "",
    description: "",
    platforms: [],
    image: "",
    launchDate: "",
    rating: "",
    genres: [],
  });

  const [inputError, setInputError] = useState({
    name: "",
    description: "",
    platforms: "",
    image: "",
    launchDate: "",
    rating: "",
    genres: "",
  });

  const validateData = (input) => {                                               //! Validaciones
    const updatedInputError = { ...inputError };

    if (!urlRegex.test(input.image)) {                                            //Validacion de imagen
      updatedInputError.image = 'URL inválida';
    } else {
      updatedInputError.image = '';
    }
    if (!ratingRegex.test(input.rating)) {
      updatedInputError.rating = 'Ingrese un número válido';                     //Validacion de rating
    } else {
      updatedInputError.rating = '';
    }
    if (!dateRegex.test(input.launchDate)) {                                     //Validacion de fecha
      updatedInputError.launchDate = 'Ingrese una fecha válida (dd-mm-aaaa)';
    } else {
      updatedInputError.launchDate = '';
    }
    if (!voidRegex.test(input.name)) {                                           //Validacion de nombre
      updatedInputError.name = 'El campo no puede estar vacío';
    } else {
      updatedInputError.name = '';
    }
    if (!voidRegex.test(input.description)) {                                    //Validacion de descripcion
      updatedInputError.description = 'El campo no puede estar vacío';
    } else {
      updatedInputError.description = '';
    }
    if (input.platforms.length === 0) {                                          //Validacion de plataformas
      updatedInputError.platforms = 'Seleccione al menos una plataforma';
    } else {
      updatedInputError.platforms = '';
    }
    setInputError(updatedInputError);
   };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    let updatedOptions = [...input[name]];

    if (checked) {
      updatedOptions.push(value);
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== value);
    }

    setInput({ ...input, [name]: updatedOptions });
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    validateData({
      ...input,
      [e.target.name]: e.target.value,
    });
    //console.log(input);
  }

  function handleSubmit(e){
      e.preventDefault();
      validateData(input); // Validar los datos antes de enviar
          
      const hasErrors = Object.values(inputError).some((error) => error); // Verificar si hay errores en el inputError
    
      if (!hasErrors) {
        dispatch(postGame(input)); //!Ejecuta la action dispatch
        setShowAlert(true); // Mostrar el alert
        console.log('JUEGO ENVIADO')
      } else {
        setShowAlert(false); 
      }
    }
      
  

  useEffect(()=>{
    
     dispatch(getGames());

     if (myGames.length === 0) {
      dispatch(getGames());
     }
     else{
      console.log('Se obtuvieron nuevos juegos: ',myGames);
     }
    
  },[myGames]);

  return (
    <div>
      <Navbar></Navbar>
        <form onSubmit={handleSubmit} className='formCreate'>
          <h1> Make Your Own Game!</h1>
          <div className='field'>
            <label className='fieldLabel'> Name </label>
            <input className='fieldInput'name='name' value={input.name} onChange={handleChange} />
            {inputError.name && <span>{inputError.name}</span>}
          </div>
          <div className='field'>
            <label className='fieldLabel'> Description </label>
            <input className='fieldInput'name='description' value={input.description} onChange={handleChange} />
            {inputError.description && <span>{inputError.description}</span>}
          </div>
          <div className='field'>
            <label className='fieldLabel'> Platforms </label>
            {platformsOptions.map((option) => (
              <div key={option}>
                <label className='fieldLabel'>
                  <input 
                    type="checkbox"
                    name="platforms"
                    value={option}
                    checked={input.platforms.includes(option)}
                    onChange={handleCheckboxChange}
                  />
                  {option}
                </label>
              </div>
            ))}
            {inputError.platforms && <span>{inputError.platforms}</span>}
          </div>
          <div className='field'>
            <label className='fieldLabel'> Image </label>
            <input className='fieldInput' name='image' value={input.image} onChange={handleChange} />
            {inputError.image && <span>{inputError.image}</span>}
          </div>
          <div className='field'>
            <label className='fieldLabel'> Launch Date </label>
            <input className='fieldInput' name='launchDate' value={input.launchDate} onChange={handleChange} />
            {inputError.launchDate && <span>{inputError.launchDate}</span>}
          </div>
          <div className='field'>
            <label className='fieldLabel'> Rating </label>
            <input className='fieldInput' name='rating' value={input.rating} onChange={handleChange} />
            {inputError.rating && <span>{inputError.rating}</span>}
          </div>
          <div className='field'>
            <label className='fieldLabel'> Genres </label>
            {genresOptions.map((option) => (
              <div key={option.name}>
                <label>
                  <input
                    type="checkbox"
                    name="genres"
                    value={option.name}
                    checked={input.genres.includes(option.name)}
                    onChange={handleCheckboxChange}
                  />
                  {option.name}
                </label>
              </div>
            ))}
            {inputError.genres && <span>{inputError.genres}</span>}
          </div>
          {inputError.name || inputError.image ? null : <button type='submit' className='buttonSubmit'>Submit</button>}
        </form>
        {showAlert && <div className="alert">¡El juego se ha enviado correctamente!</div>}
        <video id='videoback' muted autoPlay loop> <source src={backGroundVideoHome} type="video/mp4"/></video>
    </div>
  );
}

export default Form;
