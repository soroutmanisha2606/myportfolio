import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from '../Components/About'
import { Contact } from '../Components/Contact'
import Home from '../Components/Home'
import Main, { Home2 } from '../Components/Main'
import Projects from '../Components/Projects'
const Allroutes = () => {
  return (
   <>
   <Routes>
<Route exact path="/" element={<Home2/>}></Route>
<Route exact path='/about' element={<Home2 section ="about"/>}></Route>
<Route  exact path='/contact' element={<Home2 section="contact"/>}></Route>
<Route exact path='/project' element={<Home2 section="project"/>}></Route>
<Route path="/*"></Route>
   </Routes>
   </>
  )
}

export default Allroutes