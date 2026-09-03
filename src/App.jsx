import LocationInput from './components/LocationInput.jsx'
import './App.css'
import { useState } from 'react'
import { useWeather } from './hooks/useWeather.js'
import CurrentWeather from './components/CurrentWeather.jsx'
import HourlyTimeline from './components/HourlyTimeline.jsx'

function App() {
  const [city, setCity] = useState('')
  const { data, status, error, refetch } = useWeather(city)

  function handleSearch(seachedCity){
    setCity(seachedCity)
  }
  
  return (
    <>
      <LocationInput 
        onSearch={handleSearch} 
      />
      <CurrentWeather 
        data={data} 
        status={status} 
        error={error} 
        refetch={refetch}
      />
      { status === "success"  && (
        <HourlyTimeline 
        hours={data?.hours} 
        currentEpoch={data?.current?.datetimeEpoch} 
      />)}
    </>
  )
}

export default App
