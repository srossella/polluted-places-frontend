import { ActionTypes } from "../constants/action-types";

const initialState = {
    places : []
}
export const setAllPlacesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_ALL_PLACES:
            return {...state, places : action.payload}
    
        default:
            return state
    }
}



const initState={
    place: {}
}

export const setPlaceReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PLACE:
            return {...state, place : action.payload}
    
        default:
            return state
    }
}