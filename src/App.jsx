import LocationInput from './components/LocationInput.jsx'
import './App.css'
import { useState } from 'react'
import { useWeather } from './hooks/useWeather.js'
import CurrentWeather from './components/CurrentWeather.jsx'
import HourlyTimeline from './components/HourlyTimeline.jsx'
import { getSkyGradient } from './utils/Sky_Themes.js'

function App() {
  const [city, setCity] = useState('')
  const { data, status, error, refetch } = useWeather(city)

  const gradientClasses = data ? getSkyGradient(data.current.icon) : "from-slate-700 to-slate-900"; // fallback before any search

  function handleSearch(seachedCity){
    setCity(seachedCity)
  }
  
  return (
    <>
      <div className={`relative min-h-screen bg-linear-to-br ${gradientClasses} transition-colors duration-400 ease-in-out w-full h-full `}
      >
        <div className=" absolute inset-0 bg-black/45 backdrop-blur-sm z-0"
        >
          <div className="relative z-10 flex flex-col gap-4 md:gap-6 max-w-2xl mx-auto  p-4 md:p-6">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default App
