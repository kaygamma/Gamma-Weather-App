import { getWeatherIcon } from "../utils/weatherIcon";
import WeatherCard from "./WeatherCard";
import { Loader2, CloudOff } from "lucide-react";


function CurrentWeather({data, status, error, refetch}) {

  if (status === "idle") return null

  if (status === "loading") {
    return (
    <div className="flex items-center justify-center min-h-screen">
      <WeatherCard>
        <div className="flex flex-col items-center gap-3 py-6" role="status" aria-live="polite">
          <Loader2 className="w-8 h-8 animate-spin text-white/80" />
          <p className="text-sm text-white/70 animate-pulse">Fetching weather…</p>
        </div>
      </WeatherCard>
    </div>
  )}

  if (status === "error") {
    return (
    <div className="flex items-center justify-center min-h-screen">
      <WeatherCard>
        <div role="alert" className="flex flex-col items-center gap-3 py-6 text-center">
          <CloudOff className="w-8 h-8 text-amber-300" />
          <p className="text-sm text-white/90">{error}</p>
          <button
            onClick={refetch}
            className="mt-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-4 py-2 text-sm font-medium transition"
          >
            Try Again
          </button>
        </div>
      </WeatherCard>
    </div>
  )}

  if (status === "success" && !data) {
    return (
    <WeatherCard>
      <div>No data found</div>
    </WeatherCard>
  )}
    
  const { temp, feelslike, windspeed, precipprob, conditions, datetimeEpoch } = data.current;

  const Icon = getWeatherIcon(data.current.icon)

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl p-6 text-white flex flex-col gap-5 hover:scale-101 duration-300 ">
      <div className="flex flex-col gap-1">
        <h2 className="font-bold" >Current Weather</h2>
        <div className=" flex flex-row justify-between items-center gap-2">
          <p className="font-bold text-3xl">{temp} °C</p>
          <Icon className=" w-16 h-16 text-keyword stroke-2 "/>
        </div>
        <p> {data.searchedCity}</p>
        <p>Now {new Date(datetimeEpoch * 1000).toLocaleTimeString()}</p>
      </div>
      <div className="flex justify-between gap-2">
        <div>Feelslike {feelslike} °C </div>
        <div>{conditions}</div>
        <div>{windspeed} km/h </div>
        <div>{precipprob} %</div>
      </div>
      <button 
      onClick={refetch}
      className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-2 px-4 rounded-2xl h-10 w-32 self-center hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        Refresh
      </button>
    </div>
  )
}

export default CurrentWeather
