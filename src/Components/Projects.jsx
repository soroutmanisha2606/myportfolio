import { Button } from '@chakra-ui/react'
import React from 'react'
import rev from "../images/revvclone.png"
import boat from "../images/boat.png"
import bluemercury from "../images/bluemercury.png"
import "../Allstyles/project.css"
import { Link } from 'react-router-dom'
import "../Allstyles/project.css"
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
          <div >
          <a href=""><Button colorScheme='yellow'>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/revvpro' ><Button colorScheme='yellow' >Github</Button></a> 
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
          <div >
          <a href=""><Button colorScheme='yellow'>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/revvpro' ><Button colorScheme='yellow' >Github</Button></a> 
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
          <div >
          <a href=""><Button colorScheme='yellow'>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/revvpro' ><Button colorScheme='yellow' >Github</Button></a> 
  </div>
        </div>
        <div className='single_projet_box'  >
        <h1 className='Headings'>Shopdress Up Clone</h1>
          <img className='rev_home' src={rev} width="100%"/>
          <div>
            <div className='tech_tool'>
              <h1 className='Heading2'>Tech and Tools  Used-HTML,CSS,JS</h1>
            </div>
          </div>
          <div >
          <a href="https://shopdressup.netlify.app/"><Button colorScheme='yellow'>Live</Button></a>
  <a href='https://github.com/soroutmanisha2606/revvpro' ><Button colorScheme='yellow' >Github</Button></a> 
  </div>
        </div>
      </div>
    

        
 
    
    
   </>
  )
}

export default Projects