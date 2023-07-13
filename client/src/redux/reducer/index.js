import { GET_GAMES } from "../actions";

let initialState = {allGames:[], gamesBackup:[],myGames:[]}

function rootReducer(state = initialState,action){
    switch(action.type){
        case GET_GAMES:
            return{
                ...state,
                allGames:action.payload,
                gamesBackup:action.payload
            }
        
        default:
            return state

    }
}
export default rootReducer;  