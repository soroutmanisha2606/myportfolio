import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import "../Allstyles/navbar.css"
const Navbar = ({ inview }) => {
  const [active, setActive] = useState("#");
  console.log(active);
  useEffect(() => {
    setActive(inview);
  }, [inview]);
  const [showNav, setShowNav] = useState(() => null);
  useEffect(() => {
    let lastScrollPosition = 0;
    setShowNav(true);
    document.addEventListener(
      "scroll",
      function (e) {
        if (window.scrollY > lastScrollPosition) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        lastScrollPosition = window.scrollY;
      },
      {
        passive: true,
      }
    );
  }, []);
  return (
    <Box className={showNav ? 1 : 0}>
    <div className='nav'><Flex minWidth='max-content' alignItems='center' gap='2'>
    <div p='2' className='box_withname'>
     <Link ><Heading size='lg' sx={{color:"white"}}>Manisha</Heading></Link> 
    </div>
    <Spacer />
    <div className='div2'>   
    <div className='divs' >  <a
              href="/#"
              onClick={() => setActive("#")}
              className={active === "#" ? "active" : ""}
            > Home</a></div>

    <div className='divs' ><a
              href="#project"
              onClick={() => setActive("#project")}
              className={active === "#project" ? "active" : ""}
            >Project</a> </div>

    <div className='divs'><a
              href="#about"
              onClick={() => setActive("#about")}
              className={active === "#about" ? "active" : ""}
            >About</a></div>

    <div className='divs' ><a
              href="#contact"
              onClick={() => setActive("#contact")}
              className={active === "#contact" ? "active" : ""}
            >Contact</a></div>
   </div>
    
  </Flex>
  </div>
  </Box>
  )
}

export default Navbar