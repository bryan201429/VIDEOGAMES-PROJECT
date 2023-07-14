import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {getByID} from '../../redux/actions/index';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './detail.style.css';

function Detail(){
    const {id}=useParams();
    const dispatch = useDispatch()                          // Permite enviar actions al Redux
    const allGames = useSelector((state)=>state.allGames);  // Accedo al estado y me suscribo a sus cambios, especifico a que parte del estado accederé

    useEffect(()=>{
        dispatch(getByID(id));                                //Envía la action a través del dispatch al reducer
        // return(()=>{                                     //! Ejecuta en el unmount
        //     clearDetail()
        // })
    },[dispatch])
    //console.log(allGames)
    return(
        <div>
            <p>name: {allGames.name}</p>
            <p>description: {allGames.description}</p>
            <p>platforms: {allGames.platforms}</p>
            <img src={allGames.image}/>
            <p>launchDate: {allGames.launchDate}</p>
            <p>rating: {allGames.rating}</p>
 
        </div>
    )
}

export default Detail;