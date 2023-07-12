import './navbar.style.css'

function Navbar (){
return(
    <div id='Bar'>
        <div className='seatchBox'>
            <form>
                <input placeholder='Busqueda'></input>
                <button>Search</button>
            </form>
        </div>
    </div>

)
}

export default Navbar