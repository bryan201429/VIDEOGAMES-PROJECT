import axios from "axios"

export const GET_GAMES = "GET_GAMES"

export function getUsers(){
    return async function(dispatch){
        const response = await axios();
        return dispatch({
            type:"GET_USERS",
            payload:response.data
        }) 
    }
}