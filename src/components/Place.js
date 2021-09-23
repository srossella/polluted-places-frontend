import React from 'react';
import axios from 'axios';
import { useState } from 'react';


function Place() {

    const [place, setPlace] = useState('');
    const [searchName, setSearchName] = useState('');
    const [imagePath, setImagePath]= useState('');


    const handleClick = () => {
        const url= '/places/'+ searchName;
        axios.get( url ).then( res => {
            console.log(JSON.stringify( res.data[0]) );
            setPlace(JSON.stringify( res.data[0]) );
           
            setImagePath(res.data[0].filepath);
            console.log(res.data[0].filepath)
        });
    }

    const imageHandler=(e)=>{
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        axios.post('/places/', formData)
            .then((res) => {
            setImagePath(res.filepath);
            console.log(imagePath)
      });
    }

    return (
        <div>
            <input 
                type="search"
                placeholder="Search book" 
                onChange={(e) => setSearchName( e.target.value )} 
            />
            <button onClick={handleClick} >btn</button>
            Place is {place}
            
            <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} />
        
            
            <img src={`http://localhost:8000/${imagePath}`} width='500px'/> 
        </div>
    );
}

export default Place;