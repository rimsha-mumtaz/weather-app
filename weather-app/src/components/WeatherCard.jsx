import React from 'react';

const WeatherCard = ({ weather }) => {
    return (
        <div>
            {weather ? (
                <div><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                    <h2>{weather?.name}</h2>
                    <p>Temperature: {weather?.main.temp}°C</p>
                    <p>Weather: {weather?.weather[0].description}</p>
                    <p>Humidity: {weather?.weather[0].humidity}</p>
                    <p>Visibility: {weather?.visibility}</p>
                    <p>Wind Speed: {weather?.wind.speed}</p>
                </div>) :
                (<p>Loading weather</p>)
            }
        </div>
    );
};

export default WeatherCard;
