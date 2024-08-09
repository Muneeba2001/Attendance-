
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
return(
    <header>
    <nav className="bg-black w-full h-[80px]">
        <NavLink to="/">Home</NavLink>
    </nav>
</header>
)
}

export default Header