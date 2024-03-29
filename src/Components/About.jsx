import { Flex, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "../Allstyles/About.css"
import Aos from "aos";
import "aos/dist/aos.css";
import myphoto from "../images/photo.jpg"
import image from "../images/image2.jpg"

import { motion } from "framer-motion";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []); 
  return (
    <div id="about" >
    <h2 style={{fontSize:"60px",fontWeight:"bolder",marginBottom:"20px",marginTop:"10px",alignContent:"center"}}>ABOUT</h2>
    <div className='About_parent'>     
       <div className='right_about'>
       <motion.div
            className="svg"
            animate={{ translateY: [-5, 0, -5, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
          <img className='my_img'  data-aos="flip-up" src={image} alt='manisha'/>
          </motion.div>
        </div> 
      <div className='left_about'>
        {/*  */}
        <h1 className='h11'>Hii there👋 <span className='spantag'> I'm MANISHA 🙃</span></h1>
        <h2 className='h2'> I'm a Full stack web Developer 👩‍💻 ,passionate about  building great applications with my  skills and always ready for exploring new opportunities .I am a Quick Learner And an Aspiring full stack web Developer with core knowledge of MERN stack Technology.I am looking for the Opportunities for enhancing my skills and Knowlegde </h2>
        </div>
       
    </div>
    </div >
  )
}

export default About