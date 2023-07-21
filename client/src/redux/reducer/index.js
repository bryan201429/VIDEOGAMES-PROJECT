import { GET_BY_NAME, GET_GAMES, GET_BY_ID, POST_GAME, FILTER_BY_CREATION, SORT_ALFA, FILTER_GENRES } from "../actions";

let initialState = { allGames: [], gamesBackup: [], myGames: [], gamesFiltered: [] }

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: action.payload,
        gamesBackup: action.payload,
        gamesFiltered: action.payload
      }
    case GET_BY_NAME:
      return {
        ...state,
        allGames: action.payload,
        gamesBackup: action.payload,
        gamesFiltered: action.payload
      }
    case GET_BY_ID:
      return {
        ...state,
        myGames: action.payload
      }
    case POST_GAME:
      return {
        ...state,
        myGames: action.payload
      }


      case FILTER_BY_CREATION:
      const allGames = [...state.allGames];
      let gamesFilteredByCreation = allGames.filter((game) =>
        action.payload === 'Created by User' ? game.created : !game.created
      );

      return {
        ...state,
        gamesFiltered: gamesFilteredByCreation,
      };

    case SORT_ALFA:
      let gamesFilteredAlfa = [...state.gamesFiltered];

      switch (action.payload) {
        case 'A-Z':
          gamesFilteredAlfa = gamesFilteredAlfa.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'Z-A':
          gamesFilteredAlfa = gamesFilteredAlfa.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'Rating(Best First)':
          gamesFilteredAlfa = gamesFilteredAlfa.sort((a, b) => b.rating - a.rating);
          break;
        case 'Rating(Worst First)':
          gamesFilteredAlfa = gamesFilteredAlfa.sort((a, b) => a.rating - b.rating);
          break;
        default:
          break;
      }

      return {
        ...state,
        gamesFiltered: gamesFilteredAlfa,
      };

    case FILTER_GENRES:
      const allGamesGenre = [...state.allGames];
      let filteredGamesByGenres = allGamesGenre.filter((game) => {
        if (game.genres && game.genres.length > 0) {
          return game.genres.includes(action.payload);
        }
        return false;
      });

      // Combine results from creation filter and genre filter
      if (state.gamesFiltered.length > 0) {
        filteredGamesByGenres = filteredGamesByGenres.filter((game) =>
          state.gamesFiltered.includes(game)
        );
      }

      return {
        ...state,
        gamesFiltered: filteredGamesByGenres,
      };

    default:
      return state;
  }
}

export default rootReducer;