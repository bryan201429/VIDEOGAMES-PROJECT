import './navbar.style.css'
import {Link,NavLink} from 'react-router-dom'

function Navbar ({handleChange,handleSubmit}){
return(
    <div id='Bar'>
        <NavLink to='/home'><button className='navButton'>Home</button></NavLink>
        <NavLink to='/form'><button className='navButton'>Create Game</button></NavLink>
        <NavLink to='/landing'><button className='navButton'>Landing</button></NavLink>
        <div className='searchBox'>
            <form onChange={handleChange}>
                <input placeholder='Busqueda' type='search'></input>
                <button type='submit' onClick={handleSubmit}>Search</button>
            </form>
        </div>
    </div>

)
}

export default Navbar