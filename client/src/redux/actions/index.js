import axios from "axios"

export const GET_GAMES = "GET_GAMES"

export function getGames(){
    return async function(dispatch){
        const response = await axios(`https://api.rawg.io/api/games?key=1b264b4da66f445fbf3e8ef655da62a3`);
        return dispatch({
            type:"GET_GAMES",
            payload:response.data.results
        }) 
    }
}