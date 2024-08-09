import { TextField } from '@mui/material'
import React from 'react'

const Signup2 = () => {
  return (
    <div>
      <h1>SIGNUP HERE</h1>
      <TextField variant='outlined' label='Name' /><br></br><br></br>
      <TextField variant='outlined' label='Age' /><br></br><br></br>
      <TextField variant='outlined' label='number' /><br></br><br></br>
      <TextField variant='outlined' label='Password' /><br></br><br></br>
      <button variant="contained" color="success">
        LOGIN
      </button>
      
    </div>
  )
}

export default Signup2