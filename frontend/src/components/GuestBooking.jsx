import React, { useEffect, useState } from 'react';
import { fetchGuestBookings } from '../services/api';

const GuestBookings = ({ guestId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const data = await fetchGuestBookings(guestId);
        setBookings(data);
      } catch (error) {
        console.error('Failed to fetch bookings', error);
      }
    };

    getBookings();
  }, [guestId]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Guest Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.booking_id}>
            Room Number: {booking.room_number}, Status: {booking.booking_status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestBookings;
