import { Flex, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "../Allstyles/About.css"
import Aos from "aos";
import "aos/dist/aos.css";
import myphoto from "../images/photo.jpg"
import { motion } from "framer-motion";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []); 
  return (
    <div id="about" >
    <h2 style={{fontSize:"60px",color:"white",fontWeight:"bolder",marginBottom:"-20px",marginTop:"10px",alignContent:"center"}}>ABOUT</h2>
    <div className='About_parent'>
      {/* 
       */}
       {/* <div >
        <div className='right_about'>
          <motion.div
            className="svg"
            animate={{ translateY: [-5, 0, -5, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
            <Image
              src={myphoto}
              margin="auto"
              height="300px"
              maxW="500px"
              borderRadius={"50%"}
              border="1px solid"
              data-aos={"flip-up"}
              boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
            />
          </motion.div>
        </div>
        </div> */}
       <div className='right_about'>
       <motion.div
            className="svg"
            animate={{ translateY: [-5, 0, -5, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
          <img className='my_img'  data-aos="flip-up" src={myphoto} alt='manisha'/>
          </motion.div>
        </div> 
      <div className='left_about'>
        {/*  */}
        <h1>Hii there👋 <span className='spantag'> I'm MANISHA 🙃</span></h1>
        <h2 className='h2'> I'm a Full stack web Developer 👩‍💻 ,passionate about  building great applications with my  skills and always ready for exploring new opportunities .I am a Quick Learner And an Aspiring full stack web Developer with core knowledge of MERN stack Technology.I am looking for the Opportunities for enhancing my skills and Knowlegde </h2>
        </div>
       
    </div>
    </div >
  )
}
// display: block;
// padding: 0.5rem 1rem; }
// .nav-link:hover, .nav-link:focus {
//   text-decoration: none; }
// .nav-link.disabled {
//   color: #6c757d;
//   pointer-events: none;
//   cursor: default; }
export default About