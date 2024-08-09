import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BottomNavigation, Button, Input, Typography } from '@mui/material';

const Statebase = () => {
    var [val, setval] = useState("Abhinav")
    var [Name, setname] = useState()
    
    const handleinput = (e) => {
        setval(e.target.value)
        console.log(e.target.value)

    }
    const submit = () => {
        setname(val)
    }
    
  return (
      <div>
    
          <Typography variant='h3'>WELCOME  {Name}</Typography><br></br><br></br>
          <TextField id="outlined-basic" label="ENTER YOUR NAME" onChange={handleinput } variant="outlined" /><br></br><br></br>
          <Button variant="contained" onClick={submit}> Submit</Button>
              
        </div>
              

  )
}

export default Statebase