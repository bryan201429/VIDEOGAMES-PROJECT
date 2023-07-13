import './card.style.css';

function Card ({game}){                 
    console.log(game);
    return(
        <div className='cardContainer'>
            <img src={game.background_image}></img>
            <h2>{game.name}</h2>
            {game.description &&<p>Description:{game.description}</p>}
            {/* <p>Platforms:{game.platforms}</p> */}
            <p>Rating: {game.rating}</p>
            <p>Release date: {game.released}</p>

        </div>

    )
}

export default Card;