import './filters.style.css';
import { useDispatch } from 'react-redux';
import { filterByCreation, sortAlfa,filterByGenres} from '../../redux/actions';


function Filters(){
    const dispatch=useDispatch();

    const handleFilterByCreation=(e)=>{
        dispatch(filterByCreation(e.target.value))
    }
    const handleSortAlfa=(e)=>{
        dispatch(sortAlfa(e.target.value)) 
    }
    const handleFilterByGenres=(e)=>{
        dispatch(filterByGenres(e.target.value))
    }

    return(
    <div>
        <label>ORIGIN: </label>
        <select onChange={handleFilterByCreation}>
            {["ALL ORIGINS","API","Created by User"].map((origin)=>
            (<option value={origin}>{origin}</option>))}
        </select>

        <label>SORT: </label>
        <select onChange={handleSortAlfa}>
            {["A-Z","Z-A","Rating(Best First)","Rating(Worst First)"].map((gender)=>
            (<option value={gender}>{gender}</option>))}
        </select>

        <label>GENRES: </label>
        <select onChange={handleFilterByGenres}>
            {["All Genres","Action","Indie","Adventure","RPG","Strategy","Shooter","Casual","Simulation","Puzzle","Arcade","Platformer","Massively Multiplayer","Racing","Sports","Fighting","Family","Board Games","Educational","Card"].map((gender)=>
            (<option value={gender}>{gender}</option>))}
        </select >
    

</div>
    )
}


export default Filters