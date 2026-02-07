
// Fetch heatmap data
export const fetchHeatmapData = async () => {
  try {
    const response = await fetch('/api/heatmap-data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching heatmap data:', error);
    return null;
  }
};


const apiKey = 'e692b14735646fa95b88dcfa6f186763';
const apiUrl = 'https://api.openweathermap.org/data/2.5/air_pollution';

// Latitude and Longitude for Delhi
const latitude = 28.6139;
const longitude = 77.2090;

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

searchButton.addEventListener('click', () => {
  const city = searchInput.value;

  // Use the fixed latitude and longitude for Delhi
  fetch(`${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      resultsContainer.innerHTML = ''; // Clear previous results
      if (data.list && data.list.length > 0) {
        data.list.forEach(pollutionData => {
          const resultElement = document.createElement('div');
          resultElement.innerHTML = `
            <h3>${city}</h3>
            <p>CO: ${pollutionData.components.co}</p>
            <p>NO2: ${pollutionData.components.no2}</p>
            <p>O3: ${pollutionData.components.o3}</p>
            <p>SO2: ${pollutionData.components.so2}</p>
            <p>PM2.5: ${pollutionData.components.pm2_5}</p>
            <p>PM10: ${pollutionData.components.pm10}</p>
          `;
          resultsContainer.appendChild(resultElement);
        });
      } else {
        resultsContainer.innerHTML = '<p>No air pollution data found for this location.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      resultsContainer.innerHTML = '<p>An error occurred while fetching data.</p>';
    });

});


