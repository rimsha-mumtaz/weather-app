import React from 'react';

export default function SearchBar({ city, setCity, fetchWeather }) {
    return (
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
            <button onClick={fetchWeather}>Search</button>
        </div>
    );
};

