import React from 'react'
import "../Allstyles/About.css"
import myphoto from "../images/mypic.jpeg"
const About = () => {
  return (
    <div className='About_parent'>
       <div className='right_about'>
          <img className='my_img' src={myphoto} alt='manisha'/>
        </div>
      <div className='left_about'>
        <h1>Hii there👋 <span className='spantag'> I'm MANISHA 🙃</span></h1>
        <h2> I'm a Full stack web Developer 👩‍💻 ,passionate about  building great applications with my  skills and always ready for exploring new opportunities .I am a Quick Learner And an Aspiring full stack web Developer with core knowledge of MERN stack Technology.I am looking for the Opportunities for enhancing my skills and Knowlegde </h2>
        </div>
       
    </div>
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