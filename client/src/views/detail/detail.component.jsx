import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {getByID} from '../../redux/actions/index';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './detail.style.css';
import Navbar from '../../components/navbar/navbar.component';
import backGroundVideoHome from '../../assets/mountains.mp4';


function Detail(){
    const {id}=useParams();
    const dispatch = useDispatch()                          // Permite enviar actions al Redux
    const allGames = useSelector((state)=>state.myGames);  // Accedo al estado y me suscribo a sus cambios, especifico a que parte del estado accederé

    useEffect(()=>{
        dispatch(getByID(id));                                //Envía la action a través del dispatch al reducer
        // return(()=>{                                     //! Ejecuta en el unmount
        //     clearDetail()
        // })
    },[dispatch])
    // const descript=[...allGames.description]
    //const descripta=descript.replace(/<[^>]+>/g, '');
    //let platformsString = allGames.platforms.join(', ');
    console.log('Este es el game en el Detail',allGames)
    return(
        <div className='all'> 
            <Navbar></Navbar>
            <div className='containerDetail'>
                <div className='imgContainerDetail'> <img src={allGames.image} id='detailImg'/></div>
                <div className='detailsContainer'>
                    {<h1>{allGames.name}</h1>}
                    <p>DESCRIPTION: {allGames.description}</p>
                    <p>PLATFORM: {allGames.platforms}</p>
                    <p>LAUNCHDATE: {allGames.launchDate}</p>
                    <p>RATING: {allGames.rating}</p>
                    {/* <p>GENRES: {allGames.genres}</p> */}
                </div>
            </div>
            <video id='videoback' muted autoPlay loop> <source src={backGroundVideoHome} type="video/mp4"/></video>
        </div>
    )
}

export default Detail;