import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });

	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			city: response.data.name,
			date: "Tuesday, 17:59",
			description: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed.toFixed(1),
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
		});
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<button className="current-geo-btn">
					<strong>Current geolocation</strong>
				</button>
				<form>
					<div className="row">
						<div className="col-9">
							<input
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
				<div className="row base-temp-block">
					<div className="col-6 city-flex">
						<h1>{weatherData.city}</h1>
						<ul className="weather-metrics">
							<li>
								<span>{weatherData.date}</span>,
								<span> {weatherData.description}</span>
							</li>
							<li>
								Humidity: <span>{weatherData.humidity}</span>%
							</li>
							<li>
								Wind: <span>{weatherData.wind}</span>
								<span> m/s</span>
							</li>
						</ul>
					</div>
					<div className="col-6">
						<div className="weather-temperature">
							<span>
								<img
									src={weatherData.icon}
									alt={weatherData.description}
									className="base-emojies"
								/>
							</span>

							<span className="base-temperature">
								{Math.round(weatherData.temperature)}
							</span>
							<a className="units" href="/">
								°C
							</a>
							<span className="units"> | </span>
							<a className="units" href="/">
								°F
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "7fd7592386d78a3c880f783bb111932f";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return "Loading";
	}
}
