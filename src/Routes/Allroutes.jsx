import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from '../Components/About'
import { Contact } from '../Components/Contact'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Skills from '../Components/skills'
const Allroutes = () => {
  return (
   <>
  
   <Navbar/>
   <br/>
   <br/>
   <br/>
   <Home style={{border:"3px solid  red"}}/>
 
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