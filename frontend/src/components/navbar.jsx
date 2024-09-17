import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ color }) => {
  const textcolor = (color === "white") ? "text-white" : "text-black";

  return (
    <div>
      <nav className="absolute top-0 left-0 w-full p-4 mt-[-20px] flex justify-between items-center bg-transparent">
        <div className="flex items-center">
          <img
            src="/data/logo.png"
            alt="Hotel Logo"
            className="w-24 h-24"
          />
          <span className={`font-bold text-lg ${textcolor}`}>URBAN OASIS</span>
        </div>
        <div className="mr-10">
          <ul className={`flex space-x-7 text-black font-bold ${textcolor}`}>
            <li>
              <NavLink to="/" className="hover:underline">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Facilities" className="hover:underline">Facilities</NavLink>
            </li>
            <li>
              <NavLink to="/RoomsPage" className="hover:underline">Rooms</NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs" className="hover:underline">About Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
