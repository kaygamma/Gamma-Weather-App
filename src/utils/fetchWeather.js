const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

export async function fetchWeather(location) {
  const today = new Date();

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const date1 = formatDate(yesterday);
  const date2 = formatDate(tomorrow);

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/${date1}/${date2}?unitGroup=metric&include=hours&key=${API_KEY}`
  
  // console.log(url);
  

  let response;
  try {
    response = await fetch(url);
  } catch (networkError) {
    
    throw new Error("Network error — check your internet connection and try again.");
  }
  if (!response.ok) {
    const errorText = await response.text();
    if (response.status === 400) {
      throw new Error("Location not found. Check the spelling and try again.");
    }
    if (response.status === 429) {
      throw new Error("Too many requests — please wait a moment and try again.");
    }
    throw new Error(`Something went wrong (${response.status}): ${errorText}`);
  }
  const rawData = await response.json()

  return rawData
  
}