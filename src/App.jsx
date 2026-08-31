import LocationInput from './components/LocationInput.jsx'
import './App.css'
import { useEffect, useState } from 'react'
import { fetchWeather } from './utils/fetchWeather.js'

function App() {
  const [city, setCity] = useState('')
  function handleSearch(city){
    setCity(city)
  }

  useEffect(()=>{
      if (!city) return
      console.log("...", city)
      async function fetchWeaterData() {
        try {
          const data = await fetchWeather(city)
          console.log(data);

        } catch (err) {
          console.log(err.message);
        }
      }

      fetchWeaterData()
    },[city])
  
  return (
    <>
      <LocationInput onSearch={handleSearch} />
    </>
  )
}

export default App
