import Hamburger from "./hamburger"
import { NavBar } from "./nav"
// import "./pages/page.css"
import Hamburgericon from "./hamburgericon";
import { useState } from "react";

export const Header = () => {
  const [click,setClick] = useState(false);
  const handleMenu = ()=>{
    setClick(prev => !prev)
  }
  return (
   <header className="w-full ">
    <NavBar click = {click} handleMenu = {handleMenu}/>
    <Hamburger click = {click} handleMenu = {handleMenu}/>
   </header>
  )
}