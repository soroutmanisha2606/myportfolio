import React, { useEffect } from 'react'
import {AiFillHome} from "react-icons/ai"
import {AiTwotonePhone} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub,AiFillTwitterCircle} from "react-icons/ai"
import "../Allstyles/contact.css"
import Thankyou from '../Transistions/Thankyou'
import Aos from 'aos'
import {motion} from "framer-motion"
export const Contact = () => {  
    useEffect(() => {
      Aos.init({
        duration: 3000,
      });
    }, []); 
  return (<div id="contact">
    <h2 style={{fontSize:"60px",fontWeight:"bolder",marginBottom:"20px",marginTop:"20px"}}>CONTACT</h2>
    <div className='contact_parent'><div>
    <motion.div
            className="svg"
            animate={{ translateY: [-5, 0, -5, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
      <img className='IMAGE' alt='a' data-aos='flip-right' src="https://camo.githubusercontent.com/5ff9182d12e799168a3bb67b88df7388ae08ede3/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3837352f312a7164415731546a434e353768316c6275757a766368672e676966"/>
    </motion.div>
    </div>
    <div className='all_contact_boxes'>
      <div className='contact_boxes'>
      <div><AiTwotonePhone/></div>
        <div> +91 9350235384</div>
       
      </div>
      <div className='contact_boxes'>  <div><SiGmail/></div>
        <div>soroutmanisha12gmail.com</div></div>
      <div className='contact_boxes'>
       <a href='https://www.linkedin.com/in/manisha-sorout-b965231b5/' target="_blank"><div><BsLinkedin/></div></a> 
        <div>manisha-sorout-b965231b5</div>
      </div>
      <div className='contact_boxes'>
       <a href='https://github.com/soroutmanisha2606' target="_blank"><div><AiFillGithub/></div></a> 
        <div>soroutmanisha2606</div>
      </div>
      <div className='contact_boxes'></div>
      </div>
      </div>
      <div className='thankyou'><Thankyou/></div>
      </div>
      
  )
}
