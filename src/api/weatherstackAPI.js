// src/api/weatherstackAPI.js
import axios from 'axios';



const API_KEY = '5fdf4f993413379dea910cc44f3ba972';
const BASE_URL = 'https://api.weatherstack.com';

const fetchWeatherstackData = async (city = 'Delhi', type = 'current') => {
  const endpoint = type === 'history' ? 'historical' : type === 'forecast' ? 'forecast' : 'current';
  const url = `${BASE_URL}/${endpoint}`;
  
  try {
    const response = await axios.get(url, {
      params: {
        access_key: API_KEY,
        query: city,
      },
    });

    return response.data; // Returns data from Weatherstack
  } catch (error) {
    console.error(`Error fetching ${type} weather data:`, error);
    throw error;
  }
};

export default fetchWeatherstackData;
