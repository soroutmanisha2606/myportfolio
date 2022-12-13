import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
const Navbar = () => {
  return (
    <div><Flex minWidth='max-content' alignItems='center' gap='2'>
    <Box p='2'>
     <Link to="/"><Heading size='lg' sx={{color:"white"}}>Portfolio</Heading></Link> 
    </Box>
    <Spacer />
    <ButtonGroup gap='2'>
    <Link to="/">  <Button colorScheme='black.100'>Home</Button></Link>
    <Link to="/project"> <Button colorScheme='black'>Project</Button></Link> 
    <Link to="/about"><Button colorScheme='black'>About</Button></Link>
    <Link to="/contact"><Button colorScheme='black'>Contact</Button></Link>
    </ButtonGroup>
  </Flex></div>
  )
}

export default Navbar