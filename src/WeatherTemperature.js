import React, { useState } from "react";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("celsius");

	function showFahrenheit(event) {
		event.preventDefault();
		setUnit(`fahrenheit`);
	}

	function showCelsius(event) {
		event.preventDefault();
		setUnit(`celsius`);
	}

	function fahrenheit() {
		return (props.celsius * 9) / 5 + 32;
	}

	if (unit === `celsius`) {
		return (
			<div className="WeatherTemperature">
				<span className="base-temperature">{Math.round(props.celsius)}</span>

				<span className="units">°C | </span>
				<a className="units" href="/" onClick={showFahrenheit}>
					°F
				</a>
			</div>
		);
	} else {
		return (
			<div className="WeatherTemperature">
				<span className="base-temperature">{Math.round(fahrenheit())}</span>
				<a className="units" href="/" onClick={showCelsius}>
					°C
				</a>
				<span className="units"> | °F</span>
			</div>
		);
	}
}
