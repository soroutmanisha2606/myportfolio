import React, { useEffect, useState } from 'react'
import Allroutes from '../Routes/Allroutes'
import About from './About'
import { Contact } from './Contact'
import Footer from './footer'
import Home from './Home'
import { Loder } from './Loder'
import Navbar from './Navbar'
import Projects from './Projects'
import "../Allstyles/home.css"
const Main = (props) => {
  const [inview, setInview] = useState("");

  const [section] = useState(props.section);
  useEffect(() => {
    let scrollTo = document.getElementById(section);
    if (scrollTo) scrollTo.scrollIntoView();
  }, [section]);

  return (
    <div className='main_div'>
    <Navbar  setInview={inview}/>
    <br/>
    <br/>
    <br/>
    {/* <Allroutes/> */}
    <Home setInview={setInview }/>
    <About setInview={setInview}/>
    <Projects setInview={setInview}/>
    <Contact setInview={setInview}/>   
 
   {/* <Footer/> */}
    </div>
   
  )
}

export default Main
export const Home2 = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return ( 
    <div>{loading ? <Loder/> : <Main section={props.section} />}</div>
  );
};

