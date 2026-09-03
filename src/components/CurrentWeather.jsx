import { getWeatherIcon } from "../utils/weatherIcon";

function CurrentWeather({data, status, error, refetch}) {

  if (status === "idle") return null

  if (status === "loading") {
    return (
    <div>Loading...</div>
  )}

  if (status === "error") {
    return (
    <div>Error: {error}</div>
  )}

  if (status === "success" && !data) {
    return (
    <div>No data found</div>
  )}
    
  const { temp, feelslike, windspeed, precipprob, conditions, datetimeEpoch } = data.current;

  const Icon = getWeatherIcon(data.current.icon)

  return (
    <div>
      <div>
        <h2> Weather</h2>
        <div className="flex items-center gap-4 justify-center-safe">
          <p>{temp} °C</p>
          <Icon className="w-12 h-12 text-keyword"/>
        </div>
        
        <p> {data.searchedCity}</p>
        <p>Now {new Date(datetimeEpoch * 1000).toLocaleTimeString()}</p>
      </div>
      <div>
        Feelslike {feelslike} °C 
      </div>
      <div>{conditions}</div>
      <div>{windspeed} km/h </div>
      <div>{precipprob} %</div>
      <button onClick={refetch}>Refresh</button>
    </div>
  )
}

export default CurrentWeather
