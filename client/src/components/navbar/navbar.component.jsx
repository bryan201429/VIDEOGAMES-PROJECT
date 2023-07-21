import './navbar.style.css'
import {Link,NavLink} from 'react-router-dom'
import barImg from'../../assets/Bar Logo.png'

function Navbar ({handleChange,handleSubmit}){
return(
    <div id='Bar'>
        <img src={barImg}></img>
        <NavLink to='/home'><button className='navButton'>HOME</button></NavLink>
        <NavLink to='/form'><button className='navButton'>CREATE GAME</button></NavLink>
        <NavLink to='/'><button className='navButton'>LANDING</button></NavLink>
        <div className='searchBox'>
            <form className='searchForm' onChange={handleChange}>
                <input className='searchInput' placeholder='Busqueda' type='search'></input>
                <button className='searchButton' type='submit' onClick={handleSubmit}>Search</button>
            </form>
        </div>
    </div>

)
}

export default Navbar