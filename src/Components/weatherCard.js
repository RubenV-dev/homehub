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
        <span>It's 79 degrees out today Sir.</span>
        <p>Please Dress Lightly because it's also Musky</p>
        <button onClick={()=>{weatherApiCall(setWeatherInfo)}}>Weather API CALL</button>
    </div> : 
    <div className='weather'>
    <h1>Weather</h1>
    <span>It's 79 degrees out today Sir.</span>
    <p>Please Dress Lightly because it's also Musky</p>
    <p>Current Temperature : {weatherInfo.current.temp} Degrees F</p>
    <button onClick={()=>{weatherApiCall(setWeatherInfo)}}>Weather API CALL</button>
    </div>

    return (
        returnedInfo
    )
}

export default WeatherCard