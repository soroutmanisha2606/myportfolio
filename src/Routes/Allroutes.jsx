import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from '../Components/About'
import { Contact } from '../Components/Contact'
import Home from '../Components/Home'
import Main from '../Components/Main'
import Projects from '../Components/Projects'
const Allroutes = () => {
  return (
   <>
   <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/project' element={<Projects/>}></Route>

   </Routes>
   </>
  )
}

export default Allroutes