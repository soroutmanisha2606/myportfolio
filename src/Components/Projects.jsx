import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import horse from "../images/thehorse.png"
import boat from "../images/boat.png"

import bluemercury from "../images/bluemercury.png"
import "../Allstyles/project.css"

import "../Allstyles/project.css"

import shopdress from "../images/shopdressup.png"
import { motion } from "framer-motion";
import Aos from 'aos'

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []); 
  return (<div id="project">
   <h2 style={{fontSize:"60px",fontWeight:"bolder",marginBottom:"10px",marginTop:"20px"}}>PROJECTS</h2>
    <div className='project_main'>
    <motion.div
            className="svg"
            animate={{ translateY: [-5, 0, -5, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
        <div className='single_projet_box'  data-aos="flip-right"  >
        <h1 className='Headings'>Boat Clone</h1>
          <img className='rev_home' src={boat} width="100%"/>
          <div>
            <div className='tech_tool'>
              <h1 style={{fontSize:"23px",fontWeight:"bolder"}}>India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio.And it is fully responsive also</h1>
              <h1 className='Heading2' style={{color:"#ecc94b " ,fontSize:"25px",fontWeight:"bolder"}}>TTech and Tools  Used-: React,React-redux,ChakraUi,Formik ,chatbot,emailjs</h1>
            </div>
          </div>
          <div className='btn_box'>
          <a href="https://clone-boat-lifestyle.netlify.app/"target="_blank"><Button colorScheme='yellow' classname="btn_live" p={5}>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/boat-lifestyle-clone' target="_blank" classname="btn_live" ><Button p={5} colorScheme='yellow' >Github</Button></a> 
  </div>
        </div>
       </motion.div>
       <motion.div
            className="svg"
            animate={{ translateY: [-5, 0, -5, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
        <div className='single_projet_box' data-aos="flip-left" >
        <h1 className='Headings'>Bluemercury Clone</h1>
          <img className='rev_home' src={bluemercury}  width="100%" alt='bluemercury'/>
          <div>
            <div className='tech_tool'>
              <h1 style={{fontSize:"23px",fontWeight:"bolder"}}>Bluemercury.com is a leading luxury beauty retailer offering the best cosmetics, skin care, makeup, perfume, hair, and bath and body.And it is responsive also and made with html,css and js </h1>
              <h1 className='Heading2' style={{color:"#ecc94b " ,fontSize:"25px",fontWeight:"bolder"}}> <span fontSize="40%" fontWeight="bolder" style={{color:"#ecc94b " ,fontSize:"25px",fontWeight:"bolder"}}>Tech and Tools Used -</span>HTML,CSS,JS,Bootstrap</h1>
            </div>
          </div> 
          <div className='btn_box'>
          <a href="https://unrivaled-fenglisu-63c439.netlify.app/" target="_blank"><Button colorScheme='yellow' classname="btn_live" p={5}>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/Bluemercury' target="_blank" classname="btn_live" ><Button p={5} colorScheme='yellow' >Github</Button></a> 
  </div>
        </div>
        </motion.div>




        <motion.div
            className="svg"
            animate={{ translateY: [-5, 0, -5, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
        <div className='single_projet_box'  data-aos="flip-right">
        <h1 className='Headings'>Shopdress Up Clone</h1>
          <img className='rev_home' src={shopdress} width="100%"/>
          <div>
            <div className='tech_tool'>
              <h1 style={{fontSize:"23px",fontWeight:"bolder"}}>A E-commerce website user able to login with the google authentication also and here they can see some Good UI and same also is Fully Responsive . This is build under the React framework and for styling we use Chakra UI and for data we use JSON SERVER with the help of ( Cyclic.sh )
                
              </h1>
              <br/>
              <h1 className='Heading2'style={{color:"#ecc94b " ,fontSize:"25px",fontWeight:"bolder"}}>Tech and Tools Used-: React,React-redux,ChakraUi,Formik ,chatbot,emailjs</h1>
            </div>
          </div>
          <div className='btn_box'>  
          <a href="https://shopdressup.netlify.app/" target="_blank" classname="btn_live"><Button p={5} colorScheme='yellow'>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/shopdress' target="_blank" classname="btn_live" ><Button p={5} colorScheme='yellow' >Github</Button></a> 
  </div>
        </div>
        </motion.div>
       



        <motion.div
            className="svg"
            animate={{ translateY: [-5, 0, -5, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
        <div className='single_projet_box'  data-aos="flip-left">
      {/* changes made for */}
      <h1 className='Headings'>The Horse</h1>
          <img className='rev_home' src={horse} width="100%" />
          <div>
            <div className='tech_tool'>
              <h1 style={{fontSize:"23px",fontWeight:"bolder"}}>This is a replica of the website of 'The Horse' company. In this project we have implimented the backend of the cloned website.Using MERN technology </h1>
              <h1 className='Heading2' style={{color:"#ecc94b " ,fontSize:"25px",fontWeight:"bolder"}}>Tech and Tools  Used-HTML,CSS,JS</h1>
            </div>
          </div>
          <div className='btn_box'>
          <a href="https://thehorsemern.netlify.app/" target="_blank"><Button colorScheme='yellow' classname="btn_live" p={5}>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/The-Horse-MERN'  target="_blank"><Button p={5} colorScheme='yellow' >Github</Button></a> 
  </div>
        </div>
        </motion.div>
      </div>
      
    

        
 
    
    
   </div >
  )
}

export default Projects