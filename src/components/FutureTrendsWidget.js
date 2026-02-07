import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";  // Importing chart.js for temperature and precipitation trends
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'; 
import "./FutureTrendsWidget.css";  // Custom CSS for animation

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const FutureTrendsWidget = () => {
  const [futureData, setFutureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "e3553b8881ee4fd493800402251401";
  const API_URL = `http://api.weatherapi.com/v1/future.json?key=${API_KEY}&q=india&dt=2025-02-13`;

  // Fetch future data
  useEffect(() => {
    const fetchFutureData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setFutureData(response.data);
      } catch (error) {
        console.error("Error fetching future data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFutureData();
  }, []);

  // Prepare data for the Line Chart (Temperature & Precipitation)
  const prepareChartData = () => {
    if (!futureData) return null;

    const futureDay = futureData.forecast.forecastday[0].hour;
    const labels = futureDay.map(hour => hour.time.split(" ")[1]);  // Extracting time (hourly)
    const temperatures = futureDay.map(hour => hour.temp_c);  // Extracting temperatures
    const precipitation = futureDay.map(hour => hour.precip_mm);  // Extracting precipitation

    return {
      labels,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: temperatures,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4,
        },
        {
          label: 'Precipitation (mm)',
          data: precipitation,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
          tension: 0.4,
        },
      ],
    };
  };

  // Return if no data or still loading
  if (loading) {
    return <div className="loading">Loading future trends...</div>;
  }

  if (!futureData) {
    return <div className="error">Error loading future data!</div>;
  }

  const futureForecast = futureData.forecast.forecastday[0];

  return (
    <div className="future-trends-widget">
      <div className="header">
        <h2>Future Weather Trends for {futureData.location.name} on {futureForecast.date}</h2>
      </div>

      {/* Animated Section for Future Weather Summary */}
      <div className="future-summary">
        <div className="future-temp">
          <h3>{futureForecast.day.avgtemp_c}°C</h3>
          <p>{futureForecast.day.condition.text}</p>
        </div>
        <div className="weather-icon">
          <img
            src={`http://cdn.weatherapi.com/weather/64x64/day/${futureForecast.day.condition.icon.split('/')[2]}`}
            alt={futureForecast.day.condition.text}
          />
        </div>
      </div>

      {/* Animated Future Weather Trend Chart */}
      <div className="future-trend-chart">
        <h3>Temperature & Precipitation Trends</h3>
        <Line
          data={prepareChartData()}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                enabled: true,
              },
            },
            elements: {
              point: {
                radius: 5,
                hoverRadius: 7,
                hoverBorderWidth: 2,
              },
            },
          }}
        />
      </div>

      {/* Future Forecast Wind and Other Information */}
      <div className="future-info">
        <h3>Wind Speed and Humidity</h3>
        <div className="wind-humidity">
          <div className="wind">
            <p><strong>Wind Speed:</strong> {futureForecast.day.maxwind_kph} kph</p>
            <p><strong>Wind Gust:</strong> {futureForecast.day.maxwind_kph} kph</p>
          </div>
          <div className="humidity">
            <p><strong>Humidity:</strong> {futureForecast.day.avghumidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTrendsWidget;
