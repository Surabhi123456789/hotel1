import React, { useEffect, useState } from 'react';
import { fetchRooms } from '../services/api';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      try {
        const data = await fetchRooms();
        setRooms(data);
      } catch (error) {
        console.error('Failed to fetch rooms', error);
      }
    };

    getRooms();
  }, []);

  return (
    <div className="rooms-container">
      <h1 className="text-2xl font-bold mb-4">Available Rooms</h1>
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room.room_id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{room.type_name}</h2>
            <p>{room.description}</p>
            <p>Price: ${room.price_per_night}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
