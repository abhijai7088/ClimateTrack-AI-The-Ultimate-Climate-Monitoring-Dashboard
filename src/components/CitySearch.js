// src/components/CitySearch.js
import React, { useState } from 'react';

const cityData = [
  { city: "Delhi", latitude: 28.6448, longitude: 77.216721 },
  { city: "Mumbai", latitude: 19.0760, longitude: 72.8777 },
  { city: "Bangalore", latitude: 12.9716, longitude: 77.5946 },
  { city: "Chennai", latitude: 13.0827, longitude: 80.2707 },
  { city: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
  { city: "Hyderabad", latitude: 17.385044, longitude: 78.486671 },
  { city: "Pune", latitude: 18.5204, longitude: 73.8567 },
  { city: "Ahmedabad", latitude: 23.0225, longitude: 72.5714 },
  { city: "Jaipur", latitude: 26.9124, longitude: 75.7873 },
  { city: "Lucknow", latitude: 26.8467, longitude: 80.9462 },
  { city: "Chandigarh", latitude: 30.7333, longitude: 76.7794 },
  { city: "Indore", latitude: 22.7196, longitude: 75.8577 },
  { city: "Surat", latitude: 21.1702, longitude: 72.8311 },
  { city: "Nagpur", latitude: 21.1458, longitude: 79.0882 },
  { city: "Vadodara", latitude: 22.3072, longitude: 73.1812 },
  { city: "Coimbatore", latitude: 11.0168, longitude: 76.9558 },
  { city: "Kochi", latitude: 9.9312, longitude: 76.2673 },
  { city: "Vijayawada", latitude: 16.5064, longitude: 80.6480 },
  { city: "Bhubaneswar", latitude: 20.2961, longitude: 85.8189 },
  { city: "Patna", latitude: 25.5941, longitude: 85.1376 },
  { city: "Ranchi", latitude: 23.3441, longitude: 85.3096 },
  { city: "Agra", latitude: 27.1767, longitude: 78.0081 },
];

const CitySearch = ({ setCity, setLatitude, setLongitude }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (inputValue.trim()) {
      const city = inputValue.trim();
      const cityInfo = cityData.find((data) => data.city.toLowerCase() === city.toLowerCase());

      if (cityInfo) {
        setCity(city);
        setLatitude(cityInfo.latitude);
        setLongitude(cityInfo.longitude);
        setError(null); // Clear error if city found
      } else {
        setError(`City "${city}" not found. Please try another city.`);
        setCity('');
        setLatitude(null);
        setLongitude(null);
      }
    }
  };

  return (
    <div className="city-search">
      <input
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CitySearch;
