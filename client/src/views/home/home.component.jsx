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

  //*Filtro con la BD

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(searchString));
  }

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  // Lógica para paginado
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = gamesFiltered.slice(indexOfFirstGame, indexOfLastGame);

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
