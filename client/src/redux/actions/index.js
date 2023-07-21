import axios from "axios"

export const GET_GAMES = "GET_GAMES"
export const GET_BY_NAME='GET_BY_NAME';
export const GET_BY_ID='GET_BY_ID';
export const POST_GAME='POST_GAME';
export const FILTER_BY_CREATION='FILTER_BY_CREATION';
export const SORT_ALFA='SORT_ALFA';
export const FILTER_GENRES='FILTER_GENRES';

export function getGames(){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/videogames/`)
        return dispatch({
            type:"GET_GAMES",
            payload:response.data
        }) 
    }
}

export function getByName(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/videogames/name?name="${name}"`);
        console.log('La respuesta de getByName:', response.data)
        return dispatch({
            type:"GET_BY_NAME", 
            payload:response.data
        }) 
    }
}
export function getByID(id){
    return async function(dispatch){
        const response=await axios(`http://localhost:3001/videogames/${id}`);
        console.log('La respuesta de getByID:',response.data)
        return dispatch({
            type:"GET_BY_ID",
            payload:response.data
        }) 
    }
}

export function postGame(game){
    return async function(dispatch){
        const genres=await axios.get(`http://localhost:3001/genres`)
        console.log(genres);
        const response=await axios.post(`http://localhost:3001/videogames/`,game);
        console.log('Respuesta',response.data);
        return dispatch({
            type:"POST_GAME",
            payload:response.data
        }) 
    }
}

export function filterByCreation(origin){
    return async function(dispatch){
        console.log('filterByCreation',origin);
        return dispatch({
            type:"FILTER_BY_CREATION",
            payload:origin
        })
    }
}

export function sortAlfa(alfaOrder){
    return async function(dispatch){
        console.log('sortAlfa:',alfaOrder);
        return dispatch({
            type:"SORT_ALFA",
            payload:alfaOrder
        })
    }
}

export function filterByGenres(genre){
    return async function(dispatch){
        console.log('Ejecuntado filterByGenres: ',genre)
        return dispatch({
            type:"FILTER_GENRES",
            payload:genre
        })
    }
}
