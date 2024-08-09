import { AppBar, Button, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
      <div>
          <AppBar>
            <Toolbar>
          <Typography variant="h6">myapp ‎ ‎ </Typography> 
          <Link to='/l'>
            <Button variant="contained">Login</Button> 
          </Link>
          <Link to='/signup'>
            <Button variant="contained">Signup</Button> 
            
          </Link>
          <Link to='/s'>
            <Button variant="contained">State</Button>

          </Link>
          <Link to='/w'>
            <Button variant="contained">Welcome</Button>

          </Link>
          <Link to='/a'>
            <Button variant="contained">Api</Button>



          </Link>

             </Toolbar>
          </AppBar> 
          <br></br><br></br>
    </div>
  )
}

export default Navbar
