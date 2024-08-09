
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
return(
    <header className="flex  justify-between items-center bg-black w-full p-4">
         <h1 className="text-white">Logo</h1>
    <nav className="  text-white  p-4 space-x-6">
   
        <NavLink to="/"     className={({ isActive }) =>
            isActive ? "text-white border-b-4 border-white pb-1" : "text-white"
          }>Home</NavLink>
            <NavLink to="/Attendance" 
            className={({ isActive }) =>
                isActive  ? "text-white border-b-4 border-white pb-1" : "text-white"
              }>Attendance</NavLink>
        <NavLink to="/Gallery"     className={({ isActive }) =>
            isActive ? "text-white border-b-4 border-white pb-1" : "text-white"
          }>Gallery</NavLink>
      
        <NavLink to="/FAQ"     className={({ isActive }) =>
            isActive ? "text-white border-b-4 border-white pb-1" : "text-white"
          }>FAQ</NavLink>
    </nav>
</header>
)
}

export default Header