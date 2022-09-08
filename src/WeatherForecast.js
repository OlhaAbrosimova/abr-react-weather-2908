import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		// console.log(props);
		setLoaded(true);
		setForecast(response.data.daily);
		// console.log(response.data.daily);
	}
	if (loaded) {
		// console.log(forecast);
		return (
			<div className="WeatherForecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 7) {
							return (
								<div className="col" key={index}>
									<WeatherForecastDay data={dailyForecast} />
								</div>
							);
						}
					})}
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
