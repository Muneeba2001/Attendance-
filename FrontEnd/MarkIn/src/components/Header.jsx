
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
return(
    <header className="flex  justify-between items-center bg-black w-full p-4">
         <h1 className="text-white">Logo</h1>
    <nav className="  text-white  p-4 space-x-6">
   
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">AboutUs</NavLink>
        <NavLink to="/">Gallery</NavLink>
        <NavLink to="/">FAQ</NavLink>
    </nav>
</header>
)
}

export default Header