// src/api/weatherEmbedAPI.js
import { fetchData } from '../utils/fetchData';

const API_KEY = '8df9c31e69mshc0bc9d835224001p1ed23djsn6ac056876379';
const BASE_URL = 'https://weather-embed.com/api/v1/image.png';

export const getWeatherEmbedData = async (location) => {
    const url = `${BASE_URL}?location=${location}&key=${API_KEY}`;
    return await fetchData(url);
};
