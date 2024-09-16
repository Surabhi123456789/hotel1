import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'; 
import AboutUs from './components/AboutUs';
import Dining from './components/Dining';
import Rooms from './components/Rooms';
import Booking from './components/Booking';
import './index.css'; // Tailwind's CSS file

function App() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-semibold">
            <Link to="/" className="hover:text-gray-300 px-4">Home</Link>
            <Link to="/about-us" className="hover:text-gray-300 px-4">About Us</Link>
            <Link to="/dining" className="hover:text-gray-300 px-4">Dining</Link>
            <Link to="/rooms" className="hover:text-gray-300 px-4">Rooms</Link>
            <Link to="/booking" className="hover:text-gray-300 px-4">Booking</Link>
            <Link to="/login" className="hover:text-gray-300 px-4">Login</Link>
            <Link to="/signup" className="hover:text-gray-300 px-4">Sign Up</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
