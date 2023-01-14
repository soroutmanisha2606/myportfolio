import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'
import "../App.css"
import "../Allstyles/navbar.css"
import { ThemeContext } from '../Context/Dark'

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
  const {theme,mytheme,handleToggle}=React.useContext(ThemeContext)
  
  return (
    
    <Box className={showNav ? 1 : 0}>
      
    <div className='nav'><Flex minWidth='max-content' alignItems='center' gap='2'>
    <div p='2' className='box_withname'>
     <Link ><Heading size='lg' >Manisha</Heading></Link> 
    </div>
    <Spacer />
    <div className='div2'>   
    <div className='divs' >  <NavHashLink 
              to="#home"
              onClick={() => setActive("#")}
              className={active === "#" ? "active" : ""}
            > Home</NavHashLink></div>
             <div className='divs' >
      < NavHashLink
              to="#skills"
              onClick={() => setActive("#contact")}
              className={active === "#contact" ? "active" : ""}
            >Skills</ NavHashLink></div>
  
   

    <div className='divs' ><NavHashLink
              to="#project"
              onClick={() => setActive("#project")}
              className={active === "#project" ? "active" : ""}
            >Project</NavHashLink> </div>

    <div className='divs'><NavHashLink smooth="true"
              to="#about"
              onClick={() => setActive("#about")}
              className={active === "#about" ? "active" : ""}
            >About</NavHashLink></div>

    <div className='divs' >
      < NavHashLink
              to="#contact"
              onClick={() => setActive("#contact")}
              className={active === "#contact" ? "active" : ""}
            >Contact</ NavHashLink></div>
           
           </div>
           <div>
           <label class="switch">
  <input type="checkbox"  onClick={handleToggle} />
  <span class="slider round"></span>
</label>
</div>
  </Flex>
  </div>
  </Box>
  )
}

export default Navbar