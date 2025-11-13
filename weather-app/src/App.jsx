import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

function App() {
  const [count, setCount] = useState(0)
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("Sydney")
  const [apikey, setApiKey] = useState("ede83d2485231a1718bffd450e64f41d")

  const fetchWeather = async () => {
    const res = await fetch
      (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

    console.log("HTTP Status: ", res.status);

    const data = await res.json();

    console.log("API response: ", data);

    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);


  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Weather App</h1>
        <SearchBar />
        <WeatherCard weather={weather} />
      </div>
    </>
  )
}

export default App
