import { useState} from 'react'

function LocationInput({onSearch}) {
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
    className="">
      <input 
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationInput}
        className=""
      />
      <button
      type='submit'
      className=""
      >Search</button>
    </form>
  )
}

export default LocationInput
