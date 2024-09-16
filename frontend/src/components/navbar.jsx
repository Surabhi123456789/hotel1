import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full p-4 mt-[-20px] flex justify-between items-center bg-transparent">
        <div className="flex items-center">
          <img
            src="/data/logo.png"
            alt="Hotel Logo"
            className='w-24 h-24'
          />
          <span className="text-black font-bold text-lg">URBAN OASIS</span>
        </div>
        <div className='mr-10'>
          <ul className="flex space-x-7 text-black">
            <li><Link to="/HomePage" className="hover:underline">Home</Link></li>
            <li><Link to="/AboutUs" className="hover:underline">About</Link></li>
            <li><Link to="/Facilities" className="hover:underline">Facilities</Link></li>
            <li><Link to="/Contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
