import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1/future.json";
const API_KEY = "e3553b8881ee4fd493800402251401";
const DEFAULT_LOCATION = "Delhi";
const DEFAULT_DATE = "2025-02-13";

/**
 * Fetch future weather data for a given location.
 * @param {string} location - The city, state, or country to search for (default: "Delhi").
 * @param {string} date - The date for which the weather forecast is needed (default: "2025-02-13").
 * @returns {Object} The future weather data for the specified location and date.
 */
export const fetchFutureData = async (location = DEFAULT_LOCATION, date = DEFAULT_DATE) => {
  try {
    // Make API call with the provided location and date or the defaults
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: location,
        dt: date,
      },
    });

    // Return the data from the API response
    return response.data;
  } catch (error) {
    console.error(`Error fetching future weather data for location: ${location} on date: ${date}`, error);
    return null;
  }
};
