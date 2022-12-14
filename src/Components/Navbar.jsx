import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import "../Allstyles/navbar.css"
const Navbar = () => {
  return (
    <div className='nav'><Flex minWidth='max-content' alignItems='center' gap='2'>
    <div p='2' className='box_withname'>
     <Link to="/"><Heading size='lg' sx={{color:"white"}}>Portfolio</Heading></Link> 
    </div>
    <Spacer />
    <div className='div2'> 
   
    <div className='divs' colorScheme='black.100'> <Link to="/" className='nav_link'> Home</Link></div>
    <div className='divs' colorScheme='black.100'>   <Link to="/project" className='nav_link'>Project</Link> </div>
    <div className='divs' colorScheme='black.100'><Link to="/about" className='nav_link'>About</Link></div>
    <div className='divs' colorScheme='black.100'><Link to="/contact" className='nav_link'>Contact</Link></div>
   </div>
    
  </Flex>
  </div>
  )
}

export default Navbar