'use client';
import { useState, useEffect } from 'react';

const LocationGreeting = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('/api/location');
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };
    fetchLocation();
  }, []);

  if (!location) return null; // Don't show anything while loading

  return (
    <p className="text-md font-medium text-gray-500 mt-2">
      👋 **Hello from Morocco!** I see you're connecting from <span className="text-[#14b8a6]">{location.city}</span>, <span className="text-[#14b8a6]">{location.country}</span>. Let's build something great together.
    </p>
  );
};

export default LocationGreeting;
