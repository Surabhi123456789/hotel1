import React from 'react';
import { Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'; 
import AboutUs from './components/AboutUs';
import Rooms from './components/Rooms';
import Booking from './components/Booking';
import Facilities from './components/Facilities';
import './index.css'; // Tailwind's CSS file
import Navbar from './components/navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-semibold">
            <Link to="/" className="hover:text-gray-300 px-4">Home</Link>
            <Link to="/AboutUs" className="hover:text-gray-300 px-4">About Us</Link>
            <Link to="/Facilities" className="hover:text-gray-300 px-4">Facilities</Link>
            <Link to="/rooms" className="hover:text-gray-300 px-4">Rooms</Link>
            <Link to="/booking" className="hover:text-gray-300 px-4">Booking</Link>
            <Link to="/login" className="hover:text-gray-300 px-4">Login</Link>
            <Link to="/signup" className="hover:text-gray-300 px-4">Sign Up</Link>
          </div>
        </div>
      </nav> */}
     <Navbar/> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Facilities" element={<Facilities/>} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
