import React from 'react'
import { useState } from 'react';
//create // provide // usecontext
//create 
export const ThemeContext=React.createContext();
const mytheme={
  light:  {
  backgroundColor:"white",
  color:"black"
    },
    dark:{
        backgroundColor:"black",
        color:"white"
    }
}
export function ThemeContextProvider({children}){
    const [theme,settheme]=useState("dark");
    function handleToggle(){
      settheme( theme==="dark"?"light":"dark")
    }
    return<ThemeContext.Provider value={{theme,mytheme,handleToggle}}>
        {children}
    </ThemeContext.Provider>

}