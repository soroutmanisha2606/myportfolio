import React from 'react'
import "../Allstyles/footer.css"
import {AiFillHome} from "react-icons/ai"
import {AiTwotonePhone} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub,AiFillTwitterCircle} from "react-icons/ai"

import {AiOutlineArrowRight} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='parent_footer'><div className='left_footer'>
      <div className='baby_divs' >
        <div><AiFillHome/></div>
        <div>Palwal ,haryana</div>
      </div>
      <div className='baby_divs'>
        <div><AiTwotonePhone/></div>
        <div>+91 9350235384</div>
      </div>
      <div className='baby_divs'>
        <div><SiGmail/></div>
        <div>soroutmanisha12gmail.com</div>
      </div>
      
        </div>
        <div className='right_footer'>
           <div>
           Connect with me <AiOutlineArrowRight/>
           </div>
           <div>
            <div><BsLinkedin/></div>
            <div><AiFillGithub/></div>
            <div><AiFillTwitterCircle/></div>
           </div>
            </div>
            </div>
  )
}

export default Footer