function HourlyTimeline({hours, currentEpoch}) {

  function HourCard({hour, isNow}) {
    const time = new Date(hour.datetimeEpoch * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    const temp = hour.temp
    const conditions = hour.conditions
    const icon = hour.icon

    return(
      <div className={`flex flex-col items-center justify-center p-2 rounded-lg shrink-0  min-w-20 ${isNow ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
      >
        <div
        className="text-sm"
        >
          {time}
        </div>
        <div 
        className="text-lg font-bold"
        >
          {temp}°C
        </div>
        {/* <img 
        src={``} 
        alt={conditions} 
        className="w-8 h-8"
        /> */}
        <div className="text-[0.6rem]">{conditions}</div>
      </div>
    )
  }

  return (
    <div>
      <div 
      className="flex overflow-x-auto gap-3"
      >
        {hours.map((hour) => (
          <HourCard 
            key={hour.datetimeEpoch} 
            hour={hour} 
            isNow={hour.datetimeEpoch === currentEpoch} 
          />
        ))}
      </div>
    </div>
  )
}

export default HourlyTimeline
