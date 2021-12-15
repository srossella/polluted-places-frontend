import React from 'react';
import { Card } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Button } from '@mui/material';

const Form = () => {


    return (
       
        <>
            <Grid item md={12} padding={1}>
               
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
           </>
    );
};

export default Form;