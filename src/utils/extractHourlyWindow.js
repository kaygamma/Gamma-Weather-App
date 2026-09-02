// utils/extractHourlyWindow.js

export function extractHourlyWindow(data) {
  const nowEpoch = Math.floor(Date.now() / 1000); // convert ms → seconds
  const windowSeconds = 24 * 60 * 60; // 86400

  // 1. flatten data.days into one array of hour objects
  const allHours = ([
    data.days[0].hours, 
    data.days[1].hours, 
    data.days[2].hours
  ]).flat()

  // 2. filter to [nowEpoch - windowSeconds, nowEpoch + windowSeconds]
  const windowStart = nowEpoch - windowSeconds
  const windowEnd = nowEpoch + windowSeconds

  const windowedHours = allHours.filter((hours)=>{
    return hours.datetimeEpoch >= windowStart && hours.datetimeEpoch <= windowEnd
  })
  const searchedCity = data.resolvedAddress

  // 3. (optional) find the hour closest to nowEpoch for "current conditions"
  const current = allHours.reduce((closest, hour)=>{
    const closestDiff = Math.abs(closest.datetimeEpoch - nowEpoch)
    const hourDiff = Math.abs(hour.datetimeEpoch - nowEpoch)
    return hourDiff < closestDiff ? hour : closest
  })

  return { current, hours: windowedHours, searchedCity };
}