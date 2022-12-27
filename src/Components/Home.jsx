import { Button, LightMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import "../Allstyles/home.css"
import Myname from '../Transistions/Myname'
//import {introimg} from "../images/home_img_page.jpej"

  
// async function getdata(){
//   var res1=await fetch('  http://localhost:8080/Tools');
//   var res2=await res1.json();
//   console.log(res2)
//   }
//   getdata()
 
const Home = () => {
  
  return (  
   
    <div className='parent' id="home">
    <div className='hero' >
      <div className='Home_page'>
        {/* src='https://res.cloudinary.com/practicaldev/image/fetch/s--O0u1bNHs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://miro.medium.com/max/1400/0%2APXf5ge7QCN9Ga_CL.gif' */}
          <img className='gif_img' src="https://camo.githubusercontent.com/5ff9182d12e799168a3bb67b88df7388ae08ede3/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3837352f312a7164415731546a434e353768316c6275757a766368672e676966" />
      </div>
    <div className='content'>
        <p><Myname/></p>
        <h2>Full Stack Web Developer</h2>
        <div>
      <a href="https://github.com/soroutmanisha2606" target="_blank">  <Button className="btn">Github</Button></a>
      <a href="https://drive.google.com/file/d/1E6w7kLLGksy-R3bu0rW2mdTd03dGz2V3/view?usp=share_link" target="_blank">  <Button className="btn">Resume</Button></a>
            </div>
    </div>
    </div>
    
   
    {/* <About/> */}
    </div>
  )
}

export default Home