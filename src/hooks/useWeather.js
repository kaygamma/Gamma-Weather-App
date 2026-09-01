// hooks/useWeather.js
import { useState, useEffect, useCallback } from "react";
import { fetchWeather } from "../utils/fetchWeather";
import { extractHourlyWindow } from "../utils/extractHourlyWindow";

export function useWeather(location) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  // useCallback here matters — think about why, given this function
  // will be a useEffect dependency AND returned for external use.
  const loadWeather = useCallback(async () => {
    if (!location) return;

    // set loading state, clear old error
    setStatus("loading");
    setError(null);

    try {
      // call fetchWeather, then extractHourlyWindow
      // set data, set status to success
      const rawData = await fetchWeather(location)
      const windowed = extractHourlyWindow(rawData)
      setData(windowed)
      setStatus("success")

    } catch (err) {
      setError(err.message)
      setStatus("error")

    }
  }, [location]);

  useEffect(() => {
    loadWeather()
  }, [loadWeather])

  return { data, status, error, refetch: loadWeather };
}