import React from 'react';

const Pagination = ({ gamesPerPage, totalGames, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            {/* Utilizamos el método preventDefault para evitar que la URL cambie */}
            <a
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              href='!#'
              className={number === currentPage ? 'page-link active' : 'page-link'}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
