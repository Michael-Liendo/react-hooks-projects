import './useEffect.css';
import { useEffect, useState } from 'react';

/*
Un proyecto más simple podría ser crear una pequeña aplicación que muestre el clima actual en una ciudad específica utilizando la API del clima. Puedes utilizar useEffect para obtener los datos del clima de la API cada vez que se actualice el nombre de la ciudad en el estado de la aplicación. La aplicación podría tener un campo de texto para ingresar el nombre de la ciudad y un botón para buscar el clima. Luego, puedes usar useEffect para actualizar la interfaz de usuario con la información del clima obtenida de la API.
*/

export default function UseEffect() {
  const [geoCoding, setGeoCoding] = useState({
    latitude: 10.48801,
    longitude: -66.87919,
  });

  const [city, setCity] = useState('Caracas');

  const [weatherData, setWeatherData] = useState({});

  // get the city geo coding
  useEffect(() => {
    async function getGeoCodingWithName() {
      const request = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoCoding = await request.json();
      setGeoCoding(geoCoding.results[0]);
    }
    getGeoCodingWithName();
  }, [city]);

  // fetch data and save in state
  useEffect(() => {
    async function getWeatherData() {
      const request = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${geoCoding.latitude}&longitude=${geoCoding.longitude}&current_weather=true`
      );

      const weatherData = await request.json();

      setWeatherData(weatherData);
    }
    getWeatherData();
  }, [geoCoding]);

  function inputHandle(e) {
    setCity(e.target.value);
  }

  return (
    <div>
      <h1>UseEffect</h1>
      <form id="form">
        <label>City</label>
        <input
          onChange={inputHandle}
          type="text"
          name="city"
          placeholder="Caracas, Venezuela"
        />
      </form>
      <span className="lat-lon">
        Lat {geoCoding.latitude}, Lon {geoCoding.longitude}
      </span>
      <span className="temperature">
        {geoCoding.name + ', ' + geoCoding.country},{' '}
        {weatherData?.current_weather?.temperature} °C
      </span>
      <span className="time">
        {new Date(weatherData?.current_weather.time).toLocaleDateString()}
      </span>
    </div>
  );
}
