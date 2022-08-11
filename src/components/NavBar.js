// rfce
import React from 'react';
import Logo from "../logo.png";
import {Link} from 'react-router-dom'

function NavBar() {
    return <>
        <div className
        ="border 
        pl-12 py-4 space-x-8 text-center
         flex  items-center 
        ">
            <img className="w-[50px] md:w-[60px]" src={Logo}></img>
            <Link to="/" className=
            {` text-center text-neutral-50
            font-bold 
            shadow-teal-800
            text-3xl
            md:text-3xl`}>Movie Rating </Link>
           
        </div>
    </>;
}

export default NavBar;
