import { useState} from 'react'

function LocationInput({onSearch, className}) {
  const [location, setLocation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const city = location.trim()
    if (!city) return
    onSearch(city)
  }
  const handleLocationInput = (e) =>{
    setLocation(e.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit}
      className={`flex flex-row gap-4 md:flex-row justify-center items-center w-full max-w-2xl mx-auto ${className}`}>
      <input 
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationInput}
        className="bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold py-2 px-4 rounded-2xl h-10 w-full md:w-64 hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-keyword focus:border-transparent"
      />
      <button
      type='submit'
      className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-2 px-4 rounded-2xl h-10 w-32 self-center hover:scale-105 transition-transform duration-300 ease-in-out"
      >Search</button>
    </form>
  )
}

export default LocationInput
