import { GET_BY_NAME, GET_GAMES } from "../actions";

let initialState = {allGames:[], gamesBackup:[],myGames:[]}

function rootReducer(state = initialState,action){
    switch(action.type){
        case GET_GAMES:
            return{
                ...state,
                allGames:action.payload,
                gamesBackup:action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                allGames:action.payload,

            }
        default:
            return state

    }
}
export default rootReducer;  