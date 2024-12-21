import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "../Allstyles/home.css"
import Myname from '../Transistions/Myname'
import Aos from 'aos'
import { motion } from 'framer-motion'

const Home = () => {
 
    useEffect(() => {
      Aos.init({
        duration: 3000,
      });
    }, []); 
  
  return (  
   
    <div className='parent' id="home">
    <div className='hero' >
      <div className='Home_page'>
      <motion.div
            className="svg"
            animate={{ translateY: [-5, 0, -5, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
       <img className='gif_img' data-aos="flip-up" alt='abc' src="https://miro.medium.com/v2/resize:fit:800/0*wbK-MLCPKftvi2Ot" />
 </motion.div>
      </div>
    <div className='content'>
        <p><Myname/></p>
        <h2>Full Stack Web Developer</h2>
        <div>
      <a href="https://github.com/soroutmanisha2606" target="_blank">  <Button className="btn">Github</Button></a>
      <a href="https://drive.google.com/file/d/1MT-7YDwAwID2COuIoHmAZ6cXtMEluxNA/view?usp=sharing" target="_blank">  <Button className="btn">Resume</Button></a>
            </div>
    </div>
    </div>
    </div>
  )
}

export default Home