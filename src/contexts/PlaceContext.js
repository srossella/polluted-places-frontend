import React, {createContext, useState} from 'react';

export const PlaceContext= createContext();

const PlaceContextProvider = (props) => {
    
    const [Place,setPlace] = useState('');

    
    return ( 
        <PlaceContext.Provider value={[Place, setPlace]}>
            {props.children}
        </PlaceContext.Provider>
     );
}
 
export default PlaceContextProvider;