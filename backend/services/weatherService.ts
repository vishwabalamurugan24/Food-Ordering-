import axios from 'axios';

export const getWeatherRecommendation = async (location: string) => {
  const apiKey = process.env.WEATHER_API_KEY;
  if (!apiKey) {
    console.warn("WEATHER_API_KEY is not set. Using mock weather data.");
    return {
      location,
      temperature: 25,
      condition: 'Sunny',
      suggestion: 'Ice cream or cold beverages would be great!'
    };
  }

  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
  );

  const weather = response.data;
  const condition = weather.weather[0].main;
  
  let suggestion = "Enjoy your meal!";
  if (condition === 'Rain') suggestion = "A warm soup would be perfect for this rainy day!";
  if (condition === 'Clear') suggestion = "Great day for a cold drink or salad!";

  return {
    location: weather.name,
    temperature: weather.main.temp,
    condition,
    suggestion
  };
};
