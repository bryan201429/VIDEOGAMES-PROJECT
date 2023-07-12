import './home.style.css';
import Cards from '../../components/cards/cards.component';
import Navbar from '../../components/navbar/navbar.component';

function Home(){
    return(
        <div id='homeContainer'>
            <Navbar></Navbar>
            <Cards></Cards>
        </div>
    )
}

export default Home;