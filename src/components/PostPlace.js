import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputLabel } from '@mui/material';
import PlaceCard from './PlaceCard';
import { Card } from '@mui/material';

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
                    id:res.data.id,
                    date:res.data.date,
                    imagePath: res.data.filepath,
                    street: res.data.street,
                    town: res.data.town,
                    province: res.data.province
                })
            })
    }
   
    return (
        <div>
        <Grid container spacing={2} margin={2} style={{justifyContent:'space-between', }} >
            <Card style={{padding:'10px', backgroundColor:'#DCEDFE', margin:'20px'}}>
            
            <h4> Upload a new place</h4>
            
            <form onSubmit={submitForm}> 
            
                <Grid item md={12} padding={0.5}>
                   
                    <TextField
                    id="outlined-name"
                    label="Street"
                    placeholder="Street" 
                    name="street"
                    required="required"
                    onChange={(e) => setPlace({...place, street: e.target.value})} 
                />
                    
                </Grid>
                <Grid item md={12} padding={1}>
                    
                    <TextField
                    id="outlined-name"
                    label="Town"
                    placeholder="Town" 
                    name="town"
                    required="required"
                    onChange={(e) => setPlace({...place, town: e.target.value})} 
                />
                    
                </Grid>
                <Grid item md={12} padding={1}>
                   
                    <TextField
                    id="outlined-name"
                    label="Province"
                    placeholder="Province" 
                    name="province"
                    required="required"
                    onChange={(e) => setPlace({...place, province: e.target.value})} 
                />
                    
                </Grid>
                <Grid item md={12} padding={1} >
              <InputLabel variant='standard' color='primary' 
                    style={{ cursor: 'pointer',border:'#1273de solid 1px', padding:'8px',
                    }}>
                  Upload file
                        <input 
                            style={{display:'absolute', width:'1px', height:'1px', zIndex:'-1'}}
                            type="file" 
                            name="image" 
                            accept="image/*" 
                            required="required" 
                            multiple={false} 
                            onChange={(e) => {setFile(e.target.files[0])}}
                        /> 
               </InputLabel>
                    {
                        file
                        ? file.name
                        : null
                    }
                        
                </Grid>   
                <Grid item md={12} padding={1}>
                     <Button variant="contained"  type="submit">Submit place </Button>
                </Grid> 
                    <Grid item md={12} padding={1}>
                        <Button variant="outlined" type="reset" value="Reset" onClick={clearUpload} >Reset</Button>
                    </Grid>   
                </form>
                </Card>
           
                { postedPlace.street 
                  ? (  <Card style={{display:'flex',padding:'10px', margin:'20px', flexDirection:'column',backgroundColor:'#DCEDFE'}}>
                        <h4>Your place with id {postedPlace.id} has been submitted.</h4>
                        <PlaceCard place={postedPlace}/>
                    
                    </Card> 
                    )
                  : null }
               
            </Grid>
        </div>
    );
}

export default PostPlace;