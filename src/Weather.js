import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		// console.log(response.data);
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			city: response.data.name,
			date: new Date(),
			description: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed.toFixed(1),
			icon: response.data.weather[0].icon,
		});
	}

	function search() {
		const apiKey = "7fd7592386d78a3c880f783bb111932f";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
		//search for a city
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}
	if (weatherData.ready) {
		return (
			<div className="Weather">
				<button className="current-geo-btn">
					<strong>Current geolocation</strong>
				</button>
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								onChange={handleCityChange}
								className="type-city-form"
								type="text"
								placeholder="Type a city..."
								autoComplete="off"
							/>
						</div>
						<div className="col-3">
							<input className="search-btn" type="submit" value="Search" />
						</div>
					</div>
				</form>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		search();
		return "Loading";
	}
}
