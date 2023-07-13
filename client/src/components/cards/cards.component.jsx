import './cards.style.css'
import Card from '../card/card.component'

function Cards({allGames}){         //?allUsers se extrae de props
    const gamesList=allGames
    return(
        <div className='cardsContainer'>    
            {gamesList?.map((game)=>(   
                <Card game={game}></Card>  
            ))}

        </div>

    )
}
export default Cards