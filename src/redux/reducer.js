import { ADD_FAV, REMOVE_FAV } from "./actionType"

const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, {type, payload}) => {
   switch(type){
    case ADD_FAV:
        return {
            ...state,
            myFavorites: [...state.myFavorites, payload]
        }
    case REMOVE_FAV:
        return {
            ...state,
            myFavorites: state.myFavorites.filter(fav => fav.id !== payload) //filter retorna un nuevo array
        }

    default:
    return {...state}
   }
} 

export default rootReducer;