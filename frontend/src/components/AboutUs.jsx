import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking'); // Adjust this path according to your routing setup
  };

  return (
    <div>
      {/* First Section: Video with Booking Button */}
      <div className="relative h-screen flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/data/video2.mp4" // Adjust path if necessary
          autoPlay
          loop
          muted
        />
        <div className="text-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-4">Experience Luxury</h1>
          <button 
            onClick={handleBookingClick} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Second Section: About Us with Text and Image */}
      <div className="flex flex-col md:flex-row py-12 px-4">
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="/data/img1.jpg" // Replace with actual image
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex items-center">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About URBAN OASIS</h2>
            <p className="text-lg text-gray-600">
              We are a luxury hotel offering world-class services and facilities to make your stay memorable.
              From our elegant rooms to our exceptional dining options, everything is designed to provide the ultimate comfort.
            </p>
          </div>
        </div>
      </div>

      {/* Third Section: Dining with Full Page Image */}
      <div className="relative h-screen">
        <img
          src="https://via.placeholder.com/1600x900" // Replace with actual dining image
          alt="Dining"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white">
          <div>
            <h2 className="text-4xl font-bold mb-4">Dining</h2>
            <p className="text-lg">
              Enjoy a culinary journey with our exquisite dining options. From gourmet dishes to casual meals, our dining experiences are crafted to delight every palate.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Section: Gallery with Sliding Images */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Gallery</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="whitespace-nowrap">
              {[...Array(7).keys()].map((_, index) => (
                <img
                  key={index}
                  src={`https://via.placeholder.com/300x200?text=Photo+${index + 1}`} // Replace with actual images
                  alt={`Gallery ${index + 1}`}
                  className="inline-block w-full md:w-1/4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="flex justify-between px-4">
          <div className="flex space-x-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/login" className="hover:underline">Login</a>
          </div>
          <div className="text-right">
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Address: 123 Hotel Road, City, Country</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
