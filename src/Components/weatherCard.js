import React, {useState} from 'react';

let weatherApiCall = (setWeatherInfo) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'cors'
    };
      
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=40.702377&lon=-73.912453&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}&units=imperial`, requestOptions)
        .then(response => response.json())
        .then(result => setWeatherInfo(result))
        .catch(error => console.log('error', error));
    
}

let WeatherCard = () => {
    let [weatherInfo, setWeatherInfo] = useState({})
    let returnedInfo = weatherInfo.current === undefined ? 
    <div className='weather'>
        <h1>Weather</h1>
        <p>Welcome. Press Below to Get Latest Weather Information</p>

        <button onClick={()=>{weatherApiCall(setWeatherInfo)}}>Get Weather Information</button>
    </div> : 
    <div className='weather'>
    <h1>Weather</h1>
    <span>It's {weatherInfo.current.temp}ºF out today Sir.</span>
    <p>However it feels like {weatherInfo.current.feels_like} ºF today.</p>
    <p>We have Humidity of {weatherInfo.current.humidity}%</p>
    <p>Dew Point {weatherInfo.current.dew_point} ºF</p>
    <p>Atmospheric Pressure on the sea level {weatherInfo.current.humidity} hPa </p>
    <p>Cloudiness: {weatherInfo.current.clouds} %</p>
    <p>Current Wind Speeds: {weatherInfo.current.wind_speed} mph</p>

    <button onClick={()=>{weatherApiCall(setWeatherInfo)}}>Get Lastest Weather Information</button>
    </div>

    return (
        returnedInfo
    )
}

export default WeatherCard