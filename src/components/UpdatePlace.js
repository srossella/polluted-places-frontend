import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function UpdatePlace() {
    const {id} = useParams();

    const [place, setPlace] = useState({})
    const [file, setFile] = useState('');
    const [postedPlace, setPostedPlace] = useState({})

    const submitForm = (e) => {
        e.preventDefault() 
        const formData = new FormData();
        formData.append('image', file);
        formData.append('street', place.street);
        formData.append('town', place.town);
        formData.append('province', place.province);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const url='/places/'+id;
    
        axios.put(url, formData, config)
            .then((res) => {
                console.log(res)
                setPostedPlace({
                    imagePath: res.data.filepath,
                    street: res.data.street,
                    town: res.data.town,
                    province: res.data.province
                })
            })
    }
    
    return (
        <div>
           
            this is to update a  place 
            <form onSubmit={submitForm}> 
                <input 
                    placeholder="Street" 
                    name="street"
                    required="required"
                    onChange={(e) => setPlace({...place, street: e.target.value})} 
                />
                <input 
                    placeholder="Town" 
                    name="town"
                    required="required"
                    onChange={(e) => setPlace({...place, town: e.target.value})} 
                />
                <input 
                    placeholder="Province" 
                    name="province"
                    required="required"
                    onChange={(e) => setPlace({...place, province: e.target.value})} 
                />
                <input type="file" name="image" accept="image/*" required="required" multiple={false} onChange={(e) => {
                    setFile(e.target.files[0])}}/>
                    
                <button type="submit">submit form </button>
                
                Place is {postedPlace.street}, {postedPlace.town}, {postedPlace.province}

                <img src={`http://localhost:8000/${postedPlace.imagePath}`} alt='' width='300px'/> 
            </form>
        </div>
    );
}

export default UpdatePlace;