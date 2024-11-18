import WeatherDisplay from './WeatherDisplay'

async function getWeatherData(city) {
  const apiKey = process.env.OPENWEATHER_API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch weather data')
  }
  return res.json()
}

export default async function Page({ searchParams }) {
  const city = searchParams.city || 'London'
  
  try {
    const weatherData = await getWeatherData(city)
    return <WeatherDisplay weatherData={weatherData} city={city} />
  } catch (error) {
    return <div>Error fetching weather data. Please try again.</div>
  }
}
