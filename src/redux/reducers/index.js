import { combineReducers } from "redux";
import { setAllPlacesReducer , setPlaceReducer } from "./placesReducer";

 const reducers = combineReducers({
    setAllPlaces: setAllPlacesReducer,
    setPlace: setPlaceReducer
})

export default reducers