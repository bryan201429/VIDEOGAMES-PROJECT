import axios from "axios"

export const GET_GAMES = "GET_GAMES"
export const GET_BY_NAME='GET_BY_NAME';

export function getGames(){
    return async function(dispatch){
        //const response = await axios(`https://api.rawg.io/api/games?key=1b264b4da66f445fbf3e8ef655da62a3`);
        const response = await axios.get(`http://localhost:3001/videogames/`)
        //console.log(response.data)
        return dispatch({
            type:"GET_GAMES",
            //payload:response.data.results
            payload:response.data
        }) 
    }
}

export function getByName(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/videogames/name?name="${name}"`);
        //console.log(response.data)
        return dispatch({
            type:"GET_BY_NAME",
            payload:response.data
        }) 
    }
}