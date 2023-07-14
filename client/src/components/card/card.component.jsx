import {Link} from 'react-router-dom';
import './card.style.css';

function Card ({game}){                 
    //console.log(game.id);
    return(
        <div className='cardContainer'>
            <Link to ={`/home/${game.id}`}>
            <img src={game.image}></img>
                <h2>{game.name}</h2>
                {game.description &&<p>Description:{game.description}</p>}
                {/* <p>Platforms:{game.platforms}</p> */}
                <p>Rating: {game.rating}</p>
                <p>Release date: {game.launchDate}</p>
            </Link>
        </div>

    )
}

export default Card;