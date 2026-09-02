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

  return (
    <div>
      <div>
        <h2> Weather</h2>
        <p>{temp} °C</p>
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
