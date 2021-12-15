import { ActionTypes } from "../constants/action-types"

export const setAllPlaces = products => {
    return {
        type: ActionTypes.SET_ALL_PLACES,
        payload: products
    }
}


export const setPlace = product => {
    return {
        type: ActionTypes.SET_PLACE,
        payload: product
    }
}

