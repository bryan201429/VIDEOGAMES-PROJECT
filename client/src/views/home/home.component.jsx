import './home.style.css';
import Cards from '../../components/cards/cards.component';
import Navbar from '../../components/navbar/navbar.component';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { getByName, getGames } from '../../redux/actions/index';
import { useState } from 'react';
import Filters from '../../components/filters/filters.component';

function Home(){
    const dispatch = useDispatch()                          // Permite enviar actions al Redux
    const allGames = useSelector((state)=>state.allGames);  // Accedo al estado y me suscribo a sus cambios, especifico a que parte del estado accederé
    const gamesBackup= useSelector((state)=>state.gamesBackup);
    let [searchString,setSearchString]=useState("");

    //*Filtro con la BD

    function handleChange(e){
        e.preventDefault()                              //Previene que se refresque/renderize la pagina nuevamente
        setSearchString(e.target.value)                    //Modifica lo que se encuentra dentro de la barra de texto0
    }

    function handleSubmit(e){                                //Cuando se clickea en submit
        e.preventDefault();  
        dispatch(getByName(searchString));
    }

    //*Filtro sobre el estado
    // let [filtered, setFiltered] = useState(allGames);     //?Creo un Estado LOCAL, incialmente se le asigna allGames como valor 
    // let [searchString,setSearchString]=useState("");
    
    // function handleChange(e){
    //     e.preventDefault()                              //Previene que se refresque/renderize la pagina nuevamente
    //     setSearchString(e.target.value)                    //Modifica lo que se encuentra dentro de la barra de texto0
    // }
    // function handleSubmit(e){                                //Cuando se clickea en submit
    //     e.preventDefault()  
    //     let filtered=allGames.filter((game)=>
    //     game.name.toLowerCase().includes(searchString.toLowerCase())); //realiza filtrado 
    //     setFiltered(filtered);                             //Modifica el estado local
    //     console.log(filtered)
    // }

    useEffect(()=>{
        dispatch(getGames());                                //Envía la action a través del dispatch al reducer
        // return(()=>{                                     //! Ejecuta en el unmount
        //     clearDetail()
        // })
    },[dispatch])
    console.log('JUEGOS ENTRANTES A HOME',allGames);
    return(
        <div id='homeContainer'>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit}></Navbar>
            <Filters games={allGames}></Filters>
            <Cards allGames={allGames}></Cards>             
        </div>
    )
}

export default Home;