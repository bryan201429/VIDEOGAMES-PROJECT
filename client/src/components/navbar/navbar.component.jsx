import './navbar.style.css'

function Navbar ({handleChange,handleSubmit}){
return(
    <div id='Bar'>
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