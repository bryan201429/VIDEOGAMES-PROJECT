import {Link} from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import './card.style.css';

function Card ({game}){                 
    const cartaRef = useRef(null);
    const isRotatingRef = useRef(false);
    
    useEffect(() => {
         const cartaElement = cartaRef.current;
        const handleMouseMove = (event) => {
           if (!isRotatingRef.current) {
              isRotatingRef.current = true;
              cartaElement.classList.add('rotating');
           }
           const { layerX, layerY } = event;
           const width = cartaElement.clientWidth;
           const height = cartaElement.clientHeight;
           const yRotation = ((layerX - width / 2) / width) * 30;
           const xRotation = ((layerY - height / 2) / height) * 30;
           //console.log(xRotation,yRotation)
           cartaElement.style.transform = ` scale(1.15, 1.15) perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        };
        const handleMouseLeave = () => {
           isRotatingRef.current = false;
           cartaElement.classList.remove('rotating');
           cartaElement.style.transform = 'scale(1, 1)';
        };
        cartaElement.addEventListener('mousemove', handleMouseMove);
        cartaElement.addEventListener('mouseleave', handleMouseLeave);
        return () => {
           cartaElement.removeEventListener('mousemove', handleMouseMove);
           cartaElement.removeEventListener('mouseleave', handleMouseLeave);
        };
     },[]);

    return(
        <div className='cardContainer' ref={cartaRef}>
            <Link to ={`/home/${game.id}`}>
                <div className='imgContainer'>
                <img src={game.image}></img>
                </div>
                <h2>{game.name}</h2>
                {/* {game.description &&<p>Description:{game.description}</p>} */}
                {/* <p>Platforms:{game.platforms}</p> */}
                <p>Rating: {game.rating}</p>
                {/* <p>Release date: {game.launchDate}</p> */}
            </Link>
        </div>

    )
}

export default Card;