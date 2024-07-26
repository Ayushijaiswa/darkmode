import { useState } from 'react'
import Navbar from './Navbar'
import MainBody from './MainBody'

import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  function toggleDarkMode(){
    setDarkMode(prev=>prev=!prev)

  }

  return (
    <>
    <div className='container'>
   <Navbar
   darkMode={darkMode}
   toggleDarkMode={toggleDarkMode}
   ></Navbar>
   <MainBody
   darkMode={darkMode}
   ></MainBody>
   </div>
    </>
  )
}

export default App
