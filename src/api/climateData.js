import React, { useEffect, useState } from "react";
import { Lottie } from "lottie-react";
import weatherAnimation from "../assets/animations/weather.json"; // Import the Lottie animation
import "./climateData.css"; // Custom CSS for styling

const apiKey = "e3553b8881ee4fd493800402251401"; // API Key from WeatherAPI

// Fetch data from WeatherAPI for a given location (city, state, country)
export const fetchClimateData = async (location = "Delhi") => {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`Error: ${data.error.message}`);
    }

    return {
      location: {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
      },
      current: {
        condition: data.current.condition.text,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        feelslike_c: data.current.feelslike_c,
        feelslike_f: data.current.feelslike_f,
        humidity: data.current.humidity,
        wind_kph: data.current.wind_kph,
        wind_dir: data.current.wind_dir,
        last_updated: data.current.last_updated,
      },
      air_quality: {
        aqi: data.current.air_quality,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      error: error.message,
    };
  }
};

const ClimateWidget = ({ location }) => {
  const [climateData, setClimateData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchClimateData(location);
      setClimateData(data);
      setLoading(false);
    };

    fetchData();
  }, [location]);

  if (loading) {
    return <div className="loading">Loading climate data...</div>;
  }

  if (climateData?.error) {
    return <div className="error">{climateData.error}</div>;
  }

  return (
    <div className="climate-widget">
      <div className="header">
        <Lottie animationData={weatherAnimation} loop autoplay style={{ width: 150, height: 150 }} />
        <h2>
          {climateData.location.name}, {climateData.location.country}
        </h2>
        <p>Last Updated: {climateData.current.last_updated}</p>
      </div>
      <div className="info">
        <p>
          <strong>Condition:</strong> {climateData.current.condition}
        </p>
        <p>
          <strong>Temperature:</strong> {climateData.current.temp_c}°C / {climateData.current.temp_f}°F
        </p>
        <p>
          <strong>Feels Like:</strong> {climateData.current.feelslike_c}°C
        </p>
        <p>
          <strong>Humidity:</strong> {climateData.current.humidity}%
        </p>
        <p>
          <strong>Wind:</strong> {climateData.current.wind_kph} kph ({climateData.current.wind_dir})
        </p>
      </div>
    </div>
  );
};

export default ClimateWidget;