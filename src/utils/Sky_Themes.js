
const SKY_THEMES = {
  "clear-day": "from-sky-300 via-blue-400 to-amber-200",
  "clear-night": "from-slate-950 via-indigo-950 to-indigo-900",
  "partly-cloudy-day": "from-slate-300 via-slate-400 to-slate-500",
  "partly-cloudy-night": "from-slate-800 via-slate-900 to-slate-950",
  "cloudy": "from-slate-400 via-blue-400 to-slate-600",
  "rain": "from-sky-400 via-slate-500 to-slate-600",
  "snow": "from-sky-300 via-blue-200 to-sky-200 bg-black/10",
  "sleet": "from-sky-600 via-slate-500 to-slate-600",
  "fog": "from-slate-400 via-sky-100 to-slate-600",
  "wind": "from-slate-400 via-sky-100 to-slate-600",

};

export function getSkyGradient(iconString) {
  return SKY_THEMES[iconString] || "from-sky-300 via-blue-400 to-amber-200" 
}