// utils/extractHourlyWindow.js

export function extractHourlyWindow(data) {
  const nowEpoch = Math.floor(Date.now() / 1000); // convert ms → seconds
  const windowSeconds = 24 * 60 * 60; // 86400

  // 1. flatten data.days into one array of hour objects
  const allHours = ([
    data.days[0].hours, 
    data.days[1].hours, 
    data.days[2].hours
  ]).flatMap()

  // 2. filter to [nowEpoch - windowSeconds, nowEpoch + windowSeconds]
  const windowedHours = ([
    nowEpoch - windowSeconds,
    nowEpoch + windowSeconds
  ]).filter()

  // 3. (optional) find the hour closest to nowEpoch for "current conditions"
  const current = data.days[0].hours.reduce((closest, now)=>{

  })

  return { current, hours: windowedHours };
}