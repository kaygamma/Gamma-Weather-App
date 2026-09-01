import LocationInput from './components/LocationInput.jsx'
import './App.css'
import { useState } from 'react'
import { useWeather } from './hooks/useWeather.js'

function App() {
  const [city, setCity] = useState('')
  const { data, status, error, refetch } = useWeather(city)

  function handleSearch(seachedCity){
    setCity(seachedCity)
  }
  
  return (
    <>
      <LocationInput onSearch={handleSearch} />
    </>
  )
}

export default App
