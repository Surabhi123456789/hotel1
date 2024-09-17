import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage'; 
import AboutUs from './pages/AboutUs';
import RoomsPage from './pages/RoomsPage';
import Booking from './components/Booking';
import Facilities from './pages/Facilities';
import './index.css'; // Tailwind's CSS file

function App() {
  console.log("hello");
  
  return (
    
    <>

     
      <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Facilities" element={<Facilities/>} />
        <Route path="/RoomsPage" element={<RoomsPage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    
    </>
  );
}

export default App;
