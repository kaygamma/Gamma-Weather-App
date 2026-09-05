function WeatherCard({ children }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl shadow-xl p-6 text-white"
    >
      {children}
    </div>
  );
}

export default WeatherCard;