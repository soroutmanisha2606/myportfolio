import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from '../Components/About'
import { Contact } from '../Components/Contact'
import Home from '../Components/Home'
import Main from '../Components/Main'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Skills from '../Components/skills'
const Allroutes = () => {
  return (
   <>
   {/* <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/project' element={<Projects/>}></Route>

   </Routes> */}
   <Navbar/>
   <br/>
   <br/>
   <br/>
   <Home/>
   <br/>
   <br/>
   <Skills/> 
   <br/> 
   <About/>
   <br/>
  
   <Projects/>
   <br/>

   <Contact/> 
   <br/>
   <br/>
   <br/>
   </>
  )
}

export default Allroutes