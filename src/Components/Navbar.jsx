import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import "../Allstyles/navbar.css"
const Navbar = () => {
  return (
    <div className='nav'><Flex minWidth='max-content' alignItems='center' gap='2'>
    <Box p='2'>
     <Link to="/"><Heading size='lg' sx={{color:"white"}}>Portfolio</Heading></Link> 
    </Box>
    <Spacer />
    <ButtonGroup gap='2'>
    <Link to="/" className='nav_link'>  <Button colorScheme='black.100'>Home</Button></Link>
    <Link to="/project" className='nav_link'> <Button colorScheme='black'>Project</Button></Link> 
    <Link to="/about" className='nav_link'><Button colorScheme='black'>About</Button></Link>
    <Link to="/contact" className='nav_link'><Button colorScheme='black'>Contact</Button></Link>
    </ButtonGroup>
  </Flex></div>
  )
}

export default Navbar