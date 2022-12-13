import { Button } from '@chakra-ui/react'
import React from 'react'
import rev from "../images/revvclone.png"
import boat from "../images/boat.png"
import bluemercury from "../images/bluemercury.png"
import "../Allstyles/project.css"
import { Link } from 'react-router-dom'
import "../Allstyles/project.css"
import shopdress from "../images/shopdressup.png"
const Projects = () => {
  return (<>
  
    <div className='project_main' style={{border:"2px solid red"}}>
      <div className='single_projet_box'  >
      <h1 className='Headings'>Revv Clone</h1>
          <img className='rev_home' src={rev} width="100%"/>
          <div>
            <div className='tech_tool'>
              <h1 className='Heading2'>Tech and Tools  Used-HTML,CSS,JS</h1>
            </div>
          </div>
          <div className='btn_box'>
          <a href=""><Button colorScheme='yellow' classname="btn_live" p={8}>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/revvpro'  ><Button p={10} colorScheme='yellow' >Github</Button></a> 
  </div>
        </div>
        <div className='single_projet_box' >
        <h1 className='Headings'>Boat Clone</h1>
          <img className='rev_home' src={boat} width="100%"/>
          <div>
            <div className='tech_tool'>
              <h1 className='Heading2'>Tech and Tools  Used-HTML,CSS,JS</h1>
            </div>
          </div>
          <div className='btn_box'>
          <a href=""><Button colorScheme='yellow' classname="btn_live" p={10}>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/revvpro' classname="btn_live" ><Button p={10} colorScheme='yellow' >Github</Button></a> 
  </div>
        </div>
        <div className='single_projet_box'  >
        <h1 className='Headings'>Bluemercury Clone</h1>
          <img className='rev_home' src={bluemercury} width="100%"/>
          <div>
            <div className='tech_tool'>
              <h1 className='Heading2'>Tech and Tools  Used-HTML,CSS,JS</h1>
            </div>
          </div>
          <div className='btn_box'>
          <a href=""><Button colorScheme='yellow' classname="btn_live" p={10}>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/revvpro' classname="btn_live" ><Button p={10} colorScheme='yellow' >Github</Button></a> 
  </div>
        </div>
        <div className='single_projet_box'  >
        <h1 className='Headings'>Shopdress Up Clone</h1>
          <img className='rev_home' src={shopdress} width="100%"/>
          <div>
            <div className='tech_tool'>
              <h1 className='Heading2'>Tech and Tools  Used-: React,React-redux,ChakraUi,Formik ,chatbot,emailjs</h1>
            </div>
          </div>
          <div className='btn_box'>  
          <a href="https://shopdressup.netlify.app/" classname="btn_live"><Button p={10} colorScheme='yellow'>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/revvpro' classname="btn_live" ><Button p={10} colorScheme='yellow' >Github</Button></a> 
  </div>
        </div>
      </div>
    

        
 
    
    
   </>
  )
}

export default Projects