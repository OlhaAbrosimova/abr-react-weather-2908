import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<div className="row base-temp-block">
				<div className="col-6 city-flex">
					<h1>{props.data.city}</h1>
					<ul className="weather-metrics">
						<li>
							<span>
								<FormattedDate
									date={props.data.date}
									description={props.data.description}
								/>
							</span>
						</li>
						<li>
							Humidity: <span>{props.data.humidity}</span>%
						</li>
						<li>
							Wind: <span>{props.data.wind}</span>
							<span> m/s</span>
						</li>
					</ul>
				</div>
				<div className="col-6">
					<div className="weather-temperature">
						<WeatherIcon code={props.data.icon} />

						<span className="base-temperature">
							{Math.round(props.data.temperature)}
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
}
