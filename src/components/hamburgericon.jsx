import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from './hamburger';

const Hamburgericon = () => {
    const [icon , setIcon] = useState(false)
    const handleClick = ()=>{
        setIcon(e => !e)
    }
    Hamburger(icon)
  return (
    <div className='w-auto h-full flex items-center justify-center p-12'>
        <GiHamburgerMenu onClick={handleClick} className="text-2xl text-yellow-500"/>
    </div>
  )
}

export default Hamburgericon