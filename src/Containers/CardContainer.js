import React from 'react';
// import Card from '../Components/card'
import WeatherCard from '../Components/weatherCard'
import MemeCard from '../Components/memeCard'

let CardContainer = () => {
    return (
        <div className="card-container">
            <WeatherCard/>
            <MemeCard/>
            {/* <Card title={'News'}/> */}
        </div>
    )
}

export default CardContainer