import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Allroutes from './Routes/Allroutes';
import { ThemeContext } from './Context/Dark';
import React from 'react';

function App() {
  const {theme,mytheme,handleToggle}=React.useContext(ThemeContext)
  const style=theme==="light"?mytheme.light:mytheme.dark
  return (
    <div className="App" style={style}>
   <Allroutes/>
       </div>
  );
}

export default App;
