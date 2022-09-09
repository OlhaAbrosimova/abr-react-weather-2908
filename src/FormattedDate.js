import React from "react";

export default function FormattedDate(props) {
	console.log(props.date);

	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let hours = props.time.getHours();
	let minutes = props.time.getMinutes();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	let day = days[props.date.getDay()];

	return (
		<div>
			{day}, {hours}:{minutes}, {props.description}
		</div>
	);
}
