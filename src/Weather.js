import axios from 'axios';
import React, { useState } from 'react'

function Weather() {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
    const handleCityChange = (e)=>{
        setCity(e.target.value)
    }
    const fetchWeather = async() => {
      try{
        const res = 
        await axios.get
        (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'3e9a04774edc48ad67fedf4f82cbfec9'
}`)
       setWeather(res);     
}
      catch(error){
        console.log("Error fetching weather data",error)

      }
    }
    const handleClick = ()=>{
        fetchWeather();
    }

  return (
    <div className='weather-container'>
      <input type='text' placeholder='Enter City Name' value={city} onChange={handleCityChange} />
      <button onClick={handleClick}>Get Weather</button>
      {weather && <>
      <div className='weather-info'>
        <h3>{weather.data.name}</h3>
        <p>Temperature is: {weather.data.main.temp}</p>
        <p>{weather.data.weather[0].description}</p>
      </div>
      </>}
    </div>
  )
}

export default Weather
