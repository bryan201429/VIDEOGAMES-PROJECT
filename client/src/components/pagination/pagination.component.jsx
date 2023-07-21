import React from 'react';
import './pagination.style.css'
const Pagination = ({ gamesPerPage, totalGames, currentPage, paginate }) => {           //!Numero de juegos por página, total de juegos, pagina actual, callback cuando cambiamos de pagina
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>             
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'
          onClick={(e) => {
            e.preventDefault();                                                   //Evita que se refresque la página
            paginate(number);
          }}
          href='!#'
          //className={number === currentPage ? 'page-link active' : 'page-link'}
          >
              {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
