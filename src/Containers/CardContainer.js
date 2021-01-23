import React from 'react';
// import Card from '../Components/card'
import WeatherCard from '../Components/weatherCard'
import MemeCard from '../Components/memeCard'
import TodoCard from '../Components/todoCard'

let CardContainer = () => {
    return (
        <div className="card-container">
            <WeatherCard/>
            <MemeCard/>
            <TodoCard/>
        </div>
    )
}

export default CardContainer