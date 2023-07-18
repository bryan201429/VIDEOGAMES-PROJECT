import './cards.style.css'
import Card from '../card/card.component'

function Cards({allGames}){         //?allGames se extrae de props
    const gamesList=allGames
    console.log('Games en cards: ', allGames)
    return(
        <div className='cardsContainer'>    
            {gamesList?.map((game)=>(   
                <Card game={game}></Card>  
            ))}

        </div>

    )
}
export default Cards