import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import Signup from './component/Signup'
import Navbar from './component/Navbar'
import Signup2 from './component/Signup2'
import { Route, Routes } from 'react-router-dom'
import Statebase from './component/Statebase'
import Welcome from './component/Welcome'
import Api from './component/Api'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      
      {/* <Signup /> */}
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup2 />}/>
        <Route path="/l" element={<Login />} />
        <Route path="/s" element={<Statebase />} />
        <Route path="/w" element={<Welcome />} />
        <Route path="/a" element={<Api />} />
    
      </Routes>
    </>
  )
}

export default App
