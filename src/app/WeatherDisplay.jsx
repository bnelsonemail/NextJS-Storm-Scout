'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function WeatherDisplay({ weatherData, city, state }) {
  const [searchCity, setSearchCity] = useState('')
  const [searchState, setSearchState] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    setError('')

    if (!searchCity && !searchState) {
      setError('Please enter both city and state.')
      return
    }

    if (!searchCity) {
      setError('Please enter a city.')
      return
    }

    if (!searchState) {
      setError('Please enter a state.')
      return
    }

    router.push(`/?city=${encodeURIComponent(searchCity)}&state=${encodeURIComponent(searchState)}`)
  }

  const celsiusToFahrenheit = (celsius) => {
    return ((celsius * 9) / 5 + 32).toFixed(1)
  }

  if (!weatherData) {
    return (
      <div className="font-sans text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Weather Search</h1>
        <form onSubmit={handleSearch} className="mb-4 text-black">
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Enter city"
            className="border p-2 mr-2"
          />
          <input
            type="text"
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
            placeholder="Enter state"
            className="border p-2 mr-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
        </form>
        <p className="text-red-500 mb-4">No data available for {city}, {state}. Please try another city and state.</p>
      </div>
    )
  }

  return (
    <div className="font-sans text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Weather in {city}, {state}</h1>
      <form onSubmit={handleSearch} className="mb-4 text-black">
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Enter city"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
          placeholder="Enter state"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {weatherData ? (
        <>
          <h2 className="text-xl mb-2">Current weather in {city}, {state}: {weatherData.weather[0].description}</h2>
          <p className="mb-1">Temperature in {city}, {state}: {celsiusToFahrenheit(weatherData.main.temp)}°F</p>
          <p className="mb-1">Humidity in {city}, {state}: {weatherData.main.humidity}%</p>
          <p>Wind Speed in {city}, {state}: {(weatherData.wind.speed * 2.237).toFixed(1)} mph</p>
        </>
      ) : (
        <p className="text-red-500 mb-4">No data available for {city}, {state}. Please try another city and state.</p>
      )}
    </div>
  )
}