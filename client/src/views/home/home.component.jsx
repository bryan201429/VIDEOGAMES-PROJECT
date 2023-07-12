import './home.style.css';
import Cards from '../../components/cards/cards.component';
import Navbar from '../../components/navbar/navbar.component';

function Home(){
    return(
        <div>
            <p>Esta es la home</p>
            <Navbar></Navbar>
            <Cards></Cards>
        </div>
    )
}

export default Home;