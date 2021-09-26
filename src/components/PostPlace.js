import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Input } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function PostPlace() {

    const [place, setPlace] = useState({})
    const [file, setFile] = useState('');
    const [postedPlace, setPostedPlace] = useState({})

    const clearUpload = () => {
        setPlace({})
        setFile('')
        setPostedPlace({})
    }


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
        axios.post('/places/', formData, config)
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
        <>
            <form onSubmit={submitForm}> 
                <TextField
                    id="outlined-name"
                    label="Street"
                    placeholder="Street" 
                    name="street"
                    required="required"
                    onChange={(e) => setPlace({...place, street: e.target.value})} 
                />
                <TextField
                    id="outlined-name"
                    label="Town"
                    placeholder="Town" 
                    name="town"
                    required="required"
                    onChange={(e) => setPlace({...place, town: e.target.value})} 
                />
                <TextField
                    id="outlined-name"
                    label="Province"
                    placeholder="Province" 
                    name="province"
                    required="required"
                    onChange={(e) => setPlace({...place, province: e.target.value})} 
                />
                    <input 
                    type="file" 
                        name="image" 
                        accept="image/*" 
                        required="required" 
                        multiple={false} 
                        onChange={(e) => {setFile(e.target.files[0])}}
                    />
                    <input type="reset" value="Reset" onClick={clearUpload} />   
                <Button variant="contained"  type="submit">Submit place </Button>
                { postedPlace.street ?
                 (  <>
                        Your place has been submitted: {postedPlace.street}, {postedPlace.town}, {postedPlace.province}
                    </> 
                 )
                 :null }

                <img src={`http://localhost:8000/${postedPlace.imagePath}`} alt='' width='300px'/> 
                <br/>
                
            </form>
            
        </>
    );
}

export default PostPlace;