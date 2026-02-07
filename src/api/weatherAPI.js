import axios from 'axios';

const API_KEY = '5fdf4f993413379dea910cc44f3ba972';
const BASE_URL = 'https://api.weatherstack.com/';

const fetchCurrentWeather = async (city = 'New Delhi') => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}current`,
    params: {
      access_key: API_KEY,
      query: city,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

const fetchWeatherHistory = async (city = 'New Delhi', date = '2015-01-21') => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}historical`,
    params: {
      access_key: API_KEY,
      query: city,
      historical_date: date,
      hourly: 1,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather history:', error);
    throw error;
  }
};

const fetchWeatherForecast = async (city = 'New Delhi') => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}forecast`,
    params: {
      access_key: API_KEY,
      query: city,
      forecast_days: 7,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw error;
  }
};

export { fetchCurrentWeather, fetchWeatherHistory, fetchWeatherForecast };
