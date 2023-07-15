import { useState } from 'react';
import './form.style.css';

const dateRegex = /^(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|1[0-2])(\/|-)\d{2}(\d{2})?$/;
const urlRegex = /^(http:\/\/|https:\/\/)?[a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?$/;
const ratingRegex = /^\d+(\.\d+)?$/;
const voidRegex = /\S+/;

const platformsOptions = ['Play Station', 'Xbox', 'Windwos', 'Mac', 'Android', 'iOS', 'Other'];

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

  const validateData = (input) => {
    const updatedInputError = { ...inputError };

    if (!urlRegex.test(input.image)) {
      console.log('Error de img, debe ser un link');
      updatedInputError.image = 'URL inválida';
    } else {
      updatedInputError.image = '';
    }

    if (!ratingRegex.test(input.rating)) {
      console.log('Rating debe ser un número');
      updatedInputError.rating = 'Ingrese un número válido';
    } else {
      updatedInputError.rating = '';
    }

    if (!dateRegex.test(input.launchDate)) {
      updatedInputError.launchDate = 'Ingrese una fecha válida (dd-mm-aaaa)';
    } else {
      updatedInputError.launchDate = '';
    }

    if (!voidRegex.test(input.name)) {
      updatedInputError.name = 'El campo no puede estar vacío';
    } else {
      updatedInputError.name = '';
    }

    if (!voidRegex.test(input.description)) {
      updatedInputError.description = 'El campo no puede estar vacío';
    } else {
      updatedInputError.description = '';
    }

    if (input.platforms.length === 0) {
      updatedInputError.platforms = 'Seleccione al menos una plataforma';
    } else {
      updatedInputError.platforms = '';
    }

    setInputError(updatedInputError);
    //console.log(updatedInputError);
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
    console.log(input);
  }

  return (
    <div>
      <form onSubmit={""}>
        <div>
          <label> Name </label>
          <input name='name' value={input.name} onChange={handleChange} />
          {inputError.name && <span>{inputError.name}</span>}
        </div>
        <div>
          <label> Description </label>
          <input name='description' value={input.description} onChange={handleChange} />
          {inputError.description && <span>{inputError.description}</span>}
        </div>
        <div>
          <label> Platforms </label>
          {platformsOptions.map((option) => (
            <div key={option}>
              <label>
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
        <div>
          <label> Image </label>
          <input name='image' value={input.image} onChange={handleChange} />
          {inputError.image && <span>{inputError.image}</span>}
        </div>
        <div>
          <label> Launch Date </label>
          <input name='launchDate' value={input.launchDate} onChange={handleChange} />
          {inputError.launchDate && <span>{inputError.launchDate}</span>}
        </div>
        <div>
          <label> Rating </label>
          <input name='rating' value={input.rating} onChange={handleChange} />
          {inputError.rating && <span>{inputError.rating}</span>}
        </div>
        <div>
          <label> Genres </label>
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
        {inputError.name || inputError.image ? null : <button type='submit'>Submit</button>}
      </form>
    </div>
  );
}

export default Form;
