import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1/forecast.json";
const API_KEY = "e3553b8881ee4fd493800402251401";

/**
 * Fetch forecast data for a given location.
 * @param {string} location - The city, state, or country to search for (default: "Delhi").
 * @returns {Object} The weather forecast data for the specified location.
 */
export const fetchForecastData = async (location = "Delhi") => {
  try {
    // Make API call with the provided location or the default location
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: location,
        days: 1,
        aqi: "yes",
        alerts: "yes",
      },
    });

    // Return the data from the API response
    return response.data;
  } catch (error) {
    console.error(`Error fetching forecast data for location: ${location}`, error);
    return null;
  }
};
