const fetchItems = async () => {
  try {
    const health = await fetch('http://localhost:5000/health');
    console.log('Health:', await health.json());

    const menu = await fetch('http://localhost:5000/api/menu');
    const menuData = await menu.json();
    console.log('Menu Items Count:', menuData.length);
    console.log('First Item:', menuData[0]?.food_name);

    const restaurants = await fetch('http://localhost:5000/api/restaurants');
    const restData = await restaurants.json();
    console.log('Restaurants Count:', restData.length);
  } catch (err) {
    console.error('API Verification Failed:', err);
  }
};

fetchItems();
