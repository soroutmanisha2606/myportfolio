
import React, { useEffect } from 'react'
import "../Allstyles/About.css"
import Aos from "aos";
import "aos/dist/aos.css";

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
        {/* <h1 className='h11'>Hii there👋 <span className='spantag'> I'm MANISHA 🙃</span></h1> */}
        <h5 className='h2'>I am a Full-Stack Web Developer👩‍💻 with 2 years of experience building dynamic and scalable applications using the MERN stack. Passionate about creating seamless user experiences, I thrive on solving challenges with clean and efficient code. Always eager to learn, I’m looking for opportunities to innovate and grow in fast-paced, tech-driven environments </h5>
        </div>
       
    </div>
    </div >
  )
}

export default About