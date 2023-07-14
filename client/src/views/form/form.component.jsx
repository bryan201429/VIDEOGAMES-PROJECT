import { useState } from 'react';
import './form.style.css';


function Form(){

    const[input,setInput]=useState({
        name:"", 
        description:"",
        platforms:"", 
        image:"", 
        launchDate:"",
        rating:"",
        genres:"",
    })

    const[inputError,setInputError]=useState({
            name:"", 
            description:"",
            platforms:"", 
            image:"", 
            launchDate:"",
            rating:"",
            genres:"",
        })

        const validateData = (input) => {
            const updatedInputError = { ...inputError }; // Crear una copia del estado inputError
            
            if (!/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(input.image)) {
              console.log('Error de img, debe ser un link');
              updatedInputError.image = 'URL inválida';
            } else {
              updatedInputError.image = ''; // Limpiar el mensaje de error si la URL es válida
            }
            
            if (!/^\d+(\.\d+)?$/.test(input.rating)) {
              console.log('Rating debe ser un número');
              updatedInputError.rating = 'Ingrese un número válido';
            } else {
              updatedInputError.rating = ''; // Limpiar el mensaje de error si el rating es válido
            }
            
            setInputError(updatedInputError); // Actualizar el estado inputError
            
            console.log('Imagen OK');
          };
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        })
        validateData({
            ...input,
            [e.target.name]:e.target.value,
        })
    }


    return(
        <div>
           <form onSubmit={""}>
                <div>
                    <label> Name </label>
                    <input name='name' value={input.value} onChange={handleChange}/>
                </div>
                <div>
                    <label> Description </label>
                    <input name='description' value={input.value} onChange={handleChange}/>
                </div>
                <div>
                    <label> Platforms </label>
                    <input name='platforms' value={input.value} onChange={handleChange}/>
                </div>
                <div>
                    <label> Image </label>
                    <input name='image' value={input.value} onChange={handleChange}/>
                    <span>{inputError.image}</span>
                </div>
                <div>
                    <label> Launch Date </label>
                    <input name='launchDate' value={input.value} onChange={handleChange}/>
                </div>
                <div>
                    <label> Rating </label>
                    <input name='rating' value={input.value} onChange={handleChange}/>
                    <span>{inputError.rating}</span>
                </div>
           </form>
        </div>
    );
}

export default Form;