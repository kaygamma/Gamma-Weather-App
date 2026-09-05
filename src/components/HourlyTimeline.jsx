import { getWeatherIcon } from "../utils/weatherIcon"
import { useEffect, useRef } from "react"

function HourCard({hour, isNow}) {
  const time = new Date(hour.datetimeEpoch * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  const temp = hour.temp
  const conditions = hour.conditions
  const Icon = getWeatherIcon(hour.icon)

  return(
    <div className="min-w-22 min-h-34">
      <div className={`flex flex-col items-center justify-center p-2 rounded-lg shrink-0  min-w-20 min-h-32 ${isNow ? "bg-white/10 backdrop-blur-md border border-white/10" : "bg-white/5 backdrop-blur-sm border border-white/20"}`}
      >
        <div className="text-sm">{time}</div>
        <div className="text-lg font-bold">
          {temp}°C
        </div>
        <Icon className="w-8 h-8 stroke-1"/>
        <div className="text-[0.6rem] text-center">{conditions}</div>
      </div>
    </div>
  )
}

function HourlyTimeline({hours, currentEpoch}) {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    if (!scrollContainerRef.current) return

    const nowElement = scrollContainerRef.current.querySelector(`[data-epoch="${currentEpoch}"]`)

    if (nowElement) {
      nowElement.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    }
  }, [currentEpoch])

  
  return (
    <div 
    className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl p-4 text-white flex flex-col gap-3 snap-x hover:scale-101 duration-300">
      <h2 className="font-bold text-lg"
      >Hourly Forecast</h2>
    
      <div 
      className="flex flex-row gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
      >
        <div ref={scrollContainerRef} className="flex flex-row gap-0.5 overflow-x-auto snap-x snap-mandatory "
        >
          {hours.map((hour) => (
            <div 
            key={hour.datetimeEpoch}
            data-epoch={hour.datetimeEpoch}
            className="snap-center shrink-0 scale-90 hover:scale-100 duration-200 z-10"
            >
              <HourCard 
                hour={hour} 
                isNow={hour.datetimeEpoch === currentEpoch} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HourlyTimeline
