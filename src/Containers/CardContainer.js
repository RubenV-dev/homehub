import React from 'react';
import Card from '../Components/card'
import WeatherCard from '../Components/weatherCard'

let CardContainer = () => {
    return (
        <div className="card-container">
            <WeatherCard/>
            <Card title={'News'}/>
        </div>
    )
}

export default CardContainer