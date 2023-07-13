import './home.style.css';
import Cards from '../../components/cards/cards.component';
import Navbar from '../../components/navbar/navbar.component';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { getGames } from '../../redux/actions/index';
import { useState } from 'react';

function Home(){
    const dispatch = useDispatch()                          // Permite enviar actions al Redux
    const allGames = useSelector((state)=>state.allGames);  // Accedo al estado y me suscribo a sus cambios, especifico a que parte del estado accederé
    const gamesBackup= useSelector((state)=>state.gamesBackup);
    
    const [filtered, setFiltered] = useState(gamesBackup);     //?Creo un Estado LOCAL, incialmente se le asigna allGames como valor 
    const [searchString,setSearchString]=useState('');

    function handleChange(event){
        event.preventDefault()                              //Previene que se refresque la pagina
        searchString(event.target.value)
    }

    useEffect(()=>{
        dispatch(getGames())                                //Envía la action a través del dispatch al reducer
        // return(()=>{                                     //! Ejecuta en el unmount
        //     clearDetail()
        // })
    },[dispatch])

    return(
        <div id='homeContainer'>
            <Navbar></Navbar>
            <Cards allGames={allGames}></Cards>             
        </div>
    )
}

export default Home;