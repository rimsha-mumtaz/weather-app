import React from 'react';

const WeatherCard = ({ weather }) => {
    return (
        <div>
            {weather ? (
                <div>
                    <h2>{weather?.name}</h2>
                    <p>{weather?.main.temp}°C</p>
                    <p>{weather?.weather[0].description}</p>
                </div>) :
                (<p>Loading weather</p>)
            }
        </div>
    );
};

export default WeatherCard;
