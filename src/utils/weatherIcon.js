import { Sun, Moon, CloudSun, CloudMoon, Cloud, CloudRain, CloudSnow, CloudFog, Wind } from "lucide-react";

const ICON_MAP = {
  "clear-day": Sun,
  "clear-night": Moon,
  "partly-cloudy-day": CloudSun,
  "partly-cloudy-night": CloudMoon,
  "cloudy": Cloud,
  "rain": CloudRain,
  "snow": CloudSnow,
  "sleet": CloudSnow,   // reuse — no dedicated sleet icon in lucide
  "fog": CloudFog,
  "wind": Wind,
}

export function getWeatherIcon(iconString) {
  return ICON_MAP[iconString] || Cloud // fallback for anything unmapped
}