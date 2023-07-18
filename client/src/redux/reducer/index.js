import { GET_BY_NAME, GET_GAMES, GET_BY_ID, POST_GAME, FILTER_BY_CREATION } from "../actions";

let initialState = { allGames: [], gamesBackup: [], myGames: [], gamesFiltered: [] }

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: action.payload,
        gamesBackup: action.payload
      }
    case GET_BY_NAME:
      return {
        ...state,
        allGames: action.payload,
      }
    case GET_BY_ID:
      return {
        ...state,
        allGames: action.payload
      }
    case POST_GAME:
      return {
        ...state,
        myGames: action.payload
      }
    case FILTER_BY_CREATION:
      console.log('Este es el FILTER_BY_CREATION redux, action payload: ',action.payload);
      
      const allGames=[...state.allGames];
      console.log('allGames=',allGames)
      const allGamesBACKUP = [...state.gamesBackup];
      const apiGames=allGamesBACKUP.filter((game) => !game.created)
      return {
        ...state,
        allGames: action.payload === 'Created by User' ? allGamesBACKUP.filter((game) => game.created):
                   action.payload === 'ALL ORIGINS' ? allGamesBACKUP:
                   apiGames

      }

    default:
      return state
  }
}

export default rootReducer;
