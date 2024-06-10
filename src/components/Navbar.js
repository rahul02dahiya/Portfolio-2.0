import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-16 p-8 bg-gray-800 text-white flex items-center justify-between">
      <div className="logo">
        <i className="fa-solid fa-code text-3xl"></i>
      </div>
      <ul className="flex items-center justify-between nav-items gap-x-10">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
