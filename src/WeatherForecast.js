import React, { useState } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	function handleResponse(response) {
		// console.log(props);
		setLoaded(true);
		setForecast(response.data.daily);
		console.log(response.data.daily);
	}
	if (loaded) {
		console.log(forecast);
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col">
						<WeatherForecastDay data={forecast[0]} />
					</div>
					<div className="col">
						<WeatherForecastDay data={forecast[1]} />
					</div>
					<div className="col">
						<WeatherForecastDay data={forecast[2]} />
					</div>
					<div className="col">
						<WeatherForecastDay data={forecast[3]} />
					</div>
					<div className="col">
						<WeatherForecastDay data={forecast[4]} />
					</div>
					<div className="col">
						<WeatherForecastDay data={forecast[5]} />
					</div>
					<div className="col">
						<WeatherForecastDay data={forecast[6]} />
					</div>
					
				</div>
			</div>
		);
	} else {
		const apiKey = "7fd7592386d78a3c880f783bb111932f";
		let longitude = props.coordinates.lon;
		let latitude = props.coordinates.lat;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
