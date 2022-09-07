import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	function temperatureMax() {
		let temperature = Math.round(props.data.temp.max);
		return `${temperature}`;
	}

	function temperatureMin() {
		let temperature = Math.round(props.data.temp.min);
		return `${temperature}`;
	}

	function weekDay() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}
	return (
		<div>
			<div className="WeatherForecast-day">{weekDay()}</div>
			<WeatherIcon code={props.data.weather[0].icon} size={35} />
			<div className="WeatherForecast-temperature">
				<span className="WeatherForecast-temperature-max">
					{temperatureMax()}°
				</span>
				<span className="WeatherForecast-temperature-min">
					{temperatureMin()}°
				</span>
			</div>
		</div>
	);
}
