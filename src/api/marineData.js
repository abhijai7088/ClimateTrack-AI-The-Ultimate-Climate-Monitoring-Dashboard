import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1/marine.json";
const API_KEY = "e3553b8881ee4fd493800402251401";
const DEFAULT_LOCATION = "Delhi";

/**
 * Fetch marine weather data for a given location.
 * @param {string} location - The city, state, or country to search for (default: "Delhi").
 * @returns {Object} The marine weather data for the specified location.
 */
export const fetchMarineData = async (location = DEFAULT_LOCATION) => {
  try {
    // Make API call with the provided location or default (Delhi)
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: location,
        days: 1,
      },
    });

    // Return the data from the API response
    return response.data;
  } catch (error) {
    console.error(`Error fetching marine weather data for location: ${location}`, error);
    return null;
  }
};
