// lightningData.js

const API_KEY = "9c76b522b472484da6266a5af3f31bdd";

// Function to fetch lightning data
export const fetchLightningData = async (lat, lon) => {
  const url = `https://api.weatherbit.io/v2.0/current/lightning?lat=${lat}&lon=${lon}&search_dist_km=100&limit=2&search_mins=15&sort=distance&key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching lightning data:", error);
    return null;
  }
};
