import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome = () => {
    var [val, setval] = useState()
    
    const input1 = () => {
        setval("React")
    }

    const input2 = () => {
        setval("Angular")
    }

    const input3 = () => {
        setval("View")
    }

    //useEffect(()=>{},[])
    useEffect(() => {
        input2()
    }, [])

  return (
      <div>
          <Typography variant='h5'>Welcome {val}</Typography>  <br></br>
          <Button variant="contained" color='primary'onClick={input1}>React</Button>
          <Button variant="contained" color='secondary'onClick={input2}>Angular</Button>
          <Button variant="contained" color='success'onClick={input3}>View</Button>

    </div>
  )
}

export default Welcome
