import './home.style.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByName, getGames } from '../../redux/actions/index';
import Filters from '../../components/filters/filters.component';
import Cards from '../../components/cards/cards.component';
import Navbar from '../../components/navbar/navbar.component';
import Pagination from '../../components/pagination/pagination.component';
import backGroundVideoHome from '../../assets/mountains.mp4'

function Home() {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);
  const gamesFiltered = useSelector((state) => state.gamesFiltered);
  const [searchString, setSearchString] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;


  function handleChange(e) {                                  //Handle para cambios en el input search                                                     
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {                                  //Envia la action para obtener los datos desde el BackEnd
    e.preventDefault();
    dispatch(getByName(searchString));
  }

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  //! Lógica para paginado
  const indexOfLastGame = currentPage * gamesPerPage;                                                             //Obtiene el index del ultimo juego p/pagina
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;                                                        //Obtiene el index del primer juego p/pagina
  const currentGames = gamesFiltered.slice(indexOfFirstGame, indexOfLastGame);                                    // Seccionado de juegos por página

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id='homeContainer'>
        
        
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit}></Navbar>
        <Filters games={gamesFiltered}></Filters>
        <Pagination  gamesPerPage={gamesPerPage} totalGames={gamesFiltered.length} paginate={paginate}/>             
        <Cards allGames={currentGames}></Cards>
        <Pagination  gamesPerPage={gamesPerPage} totalGames={gamesFiltered.length} paginate={paginate}/>
        <video id='videoback' muted autoPlay loop> <source src={backGroundVideoHome} type="video/mp4"/></video>
    </div>
  );
}

export default Home;
