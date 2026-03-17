import axios from 'axios';

export const findNearbyRestaurants = async (latitude: number, longitude: number) => {
  const apiKey = process.env.MAPS_API_KEY;
  if (!apiKey) {
    console.warn("MAPS_API_KEY is not set. Using mock restaurant data.");
    return [
      { id: '1', name: 'Nearby Cafe', distance: '500m' },
      { id: '2', name: 'Pizza Palace', distance: '1.2km' }
    ];
  }

  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=${apiKey}`
  );

  return response.data.results;
};
