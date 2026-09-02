function HourlyTimeline({data}) {
    const currentEpoch = data.current
    const hours = data.hours

  return (
    <div>
        <div className="flex overflow-x-auto gap-3">
            {hours.map((hour) => (
            <HourCard key={hour.datetimeEpoch} hour={hour} isNow={hour.datetimeEpoch === currentEpoch} />
            ))}
        </div>
    </div>
  )
}

export default HourlyTimeline
