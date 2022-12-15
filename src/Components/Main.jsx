import React, { useEffect, useState } from 'react'
import Allroutes from '../Routes/Allroutes'
import About from './About'
import { Contact } from './Contact'
import Footer from './footer'
import Navbar from './Navbar'
import Projects from './Projects'

const Main = (props) => {
  const [inview, setInview] = useState("");

  const [section] = useState(props.section);
  useEffect(() => {
    let scrollTo = document.getElementById(section);
    if (scrollTo) scrollTo.scrollIntoView();
  }, [section]);

  return (
    <>
    <Navbar  setInview={inview}/>
    <br/>
    <br/>
    <br/>
    {/* <Allroutes/> */}
    <About setInview={setInview}/>
    <Projects setInview={setInview}/>
    <Contact setInview={setInview}/>
    
 
   {/* <Footer/> */}
    </>
   
  )
}

export default Main