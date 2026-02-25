import Hamburger from "./hamburger"
import { NavBar } from "./nav"
// import "./pages/page.css"
import Hamburgericon from "./hamburgericon";
import { useRef, useState , useEffect } from "react";

export const Header = () => {
  const [click, setClick] = useState(false);
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const hamRef = useRef(null);
  const handleMenu = () => {
    setClick(prev => !prev)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hamRef.current && !hamRef.current.contains(event.target)) {
       handleMenu
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full ">
      <NavBar click={click} handleMenu={handleMenu} />
      <Hamburger click={click} handleMenu={handleMenu} hamRef={hamRef}/>
    </header>
  )
}