import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-16 p-8 bg-gray-800 fixed z-10 bg-opacity-90 text-white flex items-center justify-between">
      <div className="logo">
        <i className="fa-solid fa-code text-3xl"></i>
      </div>
      <ul className=" items-center hidden sm:flex justify-between nav-items gap-x-10">
        <li><Link to='#home' >Home</Link></li>
        <li><Link to='#about' >About</Link></li>
        <li><Link to='#skills' >Skills</Link></li>
        <li><Link to='#projects' >Projects</Link></li>
        <li><Link to='#contact' >Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
