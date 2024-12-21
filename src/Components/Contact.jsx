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
      <img className='IMAGE' alt='a' data-aos='flip-right' src="data:image/png;base64,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"/>
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
